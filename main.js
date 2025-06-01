const { app, BrowserWindow, ipcMain, Menu } = require('electron');
const path = require('path');
const https = require('https');
const fs = require('fs');
const os = require('os');
const { URL } = require('url');

let mainWindow;

// Simple settings storage using JSON file (replacement for electron-store)
class SimpleStore {
  constructor() {
    this.configPath = path.join(os.homedir(), '.free-sms-sender-config.json');
  }

  get(key, defaultValue = {}) {
    try {
      if (fs.existsSync(this.configPath)) {
        const data = JSON.parse(fs.readFileSync(this.configPath, 'utf8'));
        return data[key] !== undefined ? data[key] : defaultValue;
      }
      return defaultValue;
    } catch (error) {
      console.error('Error reading config:', error);
      return defaultValue;
    }
  }

  set(key, value) {
    try {
      let data = {};
      if (fs.existsSync(this.configPath)) {
        data = JSON.parse(fs.readFileSync(this.configPath, 'utf8'));
      }
      data[key] = value;
      fs.writeFileSync(this.configPath, JSON.stringify(data, null, 2));
      return true;
    } catch (error) {
      console.error('Error writing config:', error);
      return false;
    }
  }
}

const store = new SimpleStore();

function createWindow() {
  // Check if icon file exists, fallback to PNG if specific format not found
  let iconPath = path.join(__dirname, 'assets', 'icon.png'); // Default fallback
  
  if (process.platform === 'win32') {
    const icoPath = path.join(__dirname, 'assets', 'icon.ico');
    if (fs.existsSync(icoPath)) {
      iconPath = icoPath;
    }
  } else if (process.platform === 'darwin') {
    const icnsPath = path.join(__dirname, 'assets', 'icon.icns');
    if (fs.existsSync(icnsPath)) {
      iconPath = icnsPath;
    }
  }

  mainWindow = new BrowserWindow({
    width: 400,
    height: 600,
    minWidth: 350,
    minHeight: 500,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    },
    frame: true,
    backgroundColor: '#667eea',
    show: false,
    icon: iconPath,
    title: 'Free SMS Sender'
  });
  
  mainWindow.loadFile('index.html');

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // Menu pour macOS
  if (process.platform === 'darwin') {
    const template = [
      {
        label: app.getName(),
        submenu: [
          { role: 'about' },
          { type: 'separator' },
          { role: 'hide' },
          { role: 'hideothers' },
          { role: 'unhide' },
          { type: 'separator' },
          { role: 'quit' }
        ]
      }
    ];
    Menu.setApplicationMenu(Menu.buildFromTemplate(template));
  } else {
    Menu.setApplicationMenu(null);
  }
}

// Function to make HTTPS requests (replacement for axios)
function makeHttpsRequest(urlString) {
  return new Promise((resolve, reject) => {
    try {
      const parsedUrl = new URL(urlString);
      
      const options = {
        hostname: parsedUrl.hostname,
        port: parsedUrl.port || 443,
        path: parsedUrl.pathname + parsedUrl.search,
        method: 'GET',
        headers: {
          'User-Agent': 'Free SMS Sender 1.0'
        },
        timeout: 10000
      };

      const req = https.request(options, (res) => {
        let data = '';
        
        res.on('data', (chunk) => {
          data += chunk;
        });
        
        res.on('end', () => {
          resolve({
            status: res.statusCode,
            statusText: res.statusMessage,
            data: data
          });
        });
      });

      req.on('error', (error) => {
        reject(error);
      });

      req.on('timeout', () => {
        req.destroy();
        const timeoutError = new Error('Request timeout');
        timeoutError.code = 'ETIMEDOUT';
        reject(timeoutError);
      });

      req.setTimeout(10000);
      req.end();
    } catch (error) {
      reject(error);
    }
  });
}

// Gestion de l'envoi de SMS
ipcMain.handle('send-sms', async (event, { user, pass, msg, to }) => {
  try {
    let url = `https://smsapi.free-mobile.fr/sendmsg?user=${encodeURIComponent(user)}&pass=${encodeURIComponent(pass)}&msg=${encodeURIComponent(msg)}`;
    
    if (to && to.trim()) {
      url += `&to=${encodeURIComponent(to)}`;
    }

    console.log('Sending SMS request to:', url.replace(pass, '***'));
    
    const response = await makeHttpsRequest(url);
    console.log('SMS API Response:', response.status, response.statusText);

    if (response.status === 200) {
      return { success: true, message: 'SMS envoyé avec succès!' };
    } else {
      throw new Error(`Erreur HTTP: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('SMS sending error:', error);
    
    let errorMessage = 'Erreur lors de l\'envoi du SMS';
    
    // Handle different types of errors
    if (error.response && error.response.status) {
      switch (error.response.status) {
        case 400:
          errorMessage = 'Paramètres manquants ou incorrects';
          break;
        case 402:
          errorMessage = 'Trop de SMS envoyés ou option non activée';
          break;
        case 500:
          errorMessage = 'Erreur serveur Free Mobile';
          break;
        default:
          errorMessage = `Erreur ${error.response.status}: ${error.response.statusText}`;
      }
    } else if (error.code === 'ENOTFOUND') {
      errorMessage = 'Pas de connexion internet';
    } else if (error.code === 'ETIMEDOUT') {
      errorMessage = 'Timeout - Vérifiez votre connexion';
    } else if (error.message.includes('400')) {
      errorMessage = 'Paramètres manquants ou incorrects';
    } else if (error.message.includes('402')) {
      errorMessage = 'Trop de SMS envoyés ou option non activée';
    } else if (error.message.includes('500')) {
      errorMessage = 'Erreur serveur Free Mobile';
    }

    return { success: false, message: errorMessage };
  }
});

// Sauvegarde et chargement des paramètres
ipcMain.handle('save-settings', (event, settings) => {
  try {
    const success = store.set('settings', settings);
    return { success };
  } catch (error) {
    console.error('Error saving settings:', error);
    return { success: false };
  }
});

ipcMain.handle('load-settings', () => {
  try {
    return store.get('settings', {});
  } catch (error) {
    console.error('Error loading settings:', error);
    return {};
  }
});

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});