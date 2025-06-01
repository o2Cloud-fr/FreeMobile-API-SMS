# 📱 Free SMS Sender

> **Application Windows desktop moderne pour envoyer des SMS via l'API Free Mobile**

Une application élégante construite avec Electron et Node.js, offrant une interface utilisateur inspirée du design Apple pour envoyer facilement des SMS depuis votre ordinateur via l'API officielle Free Mobile.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Platform](https://img.shields.io/badge/platform-Windows-lightgrey.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)

## ✨ Fonctionnalités

- 🎨 **Design moderne** - Interface glassmorphism inspirée d'Apple
- 📱 **Envoi de SMS** - Utilise l'API officielle Free Mobile
- 💾 **Sauvegarde automatique** - Vos paramètres sont conservés
- ⚡ **Temps réel** - Compteur de caractères dynamique
- 🔒 **Sécurisé** - Architecture Electron avec contextIsolation
- 🖥️ **Cross-platform** - Fonctionne sur Windows, macOS et Linux
- 📦 **Portable** - Version embarquée sans installation

## 🚀 Installation rapide

### Prérequis
- Node.js (≥ 14.0.0)
- npm ou yarn
- Compte Free Mobile avec option SMS activée

### Étapes d'installation

```bash
# Cloner le repository
git clone https://github.com/o2Cloud-fr/FreeMobile-API-SMS.git

# Aller dans le dossier
cd FreeMobile-API-SMS

# Installer les dépendances
npm install

# Lancer l'application
npm start
```

## 🔧 Configuration Free Mobile

1. **Activez l'option SMS** dans votre espace client Free Mobile
2. **Récupérez votre clé API** depuis les paramètres
3. **Utilisez votre identifiant Free Mobile** (numéro de téléphone)

## 📦 Build et distribution

```bash
# Build pour Windows
npm run build-win

# Build portable (sans installation)
npm run dist

# Build général
npm run build
```

## 🖼️ Captures d'écran

### Interface principale
- Design glassmorphism avec effets de flou
- Gradient coloré et animations fluides
- Panneau de paramètres rétractable

### Fonctionnalités
- Compteur de caractères en temps réel (160 max)
- Messages d'état avec animations
- Sauvegarde automatique des paramètres

## 🛠️ Technologies utilisées

- **Electron** - Framework pour applications desktop
- **Node.js** - Runtime JavaScript
- **Axios** - Client HTTP pour l'API
- **HTML/CSS/JS** - Interface utilisateur moderne

## 📋 Utilisation

1. **Configurer** - Saisissez vos identifiants Free Mobile
2. **Écrire** - Tapez votre message (max 160 caractères)
3. **Envoyer** - Cliquez sur le bouton ou utilisez Ctrl+Entrée

## 🔐 Sécurité

- Utilisation de `contextIsolation` pour isoler les contextes
- `nodeIntegration` désactivé par défaut
- Communication sécurisée via IPC
- Aucun stockage des mots de passe en clair

## 🐛 Résolution des problèmes

### Erreurs communes
- **400** - Paramètres manquants ou incorrects
- **402** - Quota SMS dépassé ou option non activée
- **500** - Erreur serveur Free Mobile

### Vérifications
- ✅ Option SMS activée sur Free Mobile
- ✅ Clé API correcte
- ✅ Connexion internet active

## 📝 Roadmap

- [ ] Historique des messages envoyés
- [ ] Carnet de contacts intégré
- [ ] Programmation d'envoi différé
- [ ] Support multi-comptes
- [ ] Mode sombre/clair
- [ ] Notifications système

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## ⚠️ Disclaimer

Cette application utilise l'API officielle Free Mobile. Respectez les conditions d'utilisation de Free Mobile et n'abusez pas du service SMS.

## 👨‍💻 Auteur

**Votre Nom**
- GitHub: [@o2Cloud-fr](https://github.com/o2Cloud-fr)
- Email: github@o2cloud.fr

## 🙏 Remerciements

- Free Mobile pour leur API publique
- La communauté Electron pour la documentation
- Tous les contributeurs du projet

---

⭐ **N'oubliez pas de mettre une étoile si ce projet vous a été utile !**