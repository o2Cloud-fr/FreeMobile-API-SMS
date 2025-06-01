# 📱 Free SMS Sender

> **Application Windows desktop moderne pour envoyer des SMS via l'API Free Mobile**

Une application élégante construite avec Electron et Node.js, offrant une interface utilisateur inspirée du design moderne avec des effets glassmorphism pour envoyer facilement des SMS depuis votre ordinateur via l'API officielle Free Mobile.

Version Web : https://freemobile.o2cloud.fr/

![Banner](https://img.shields.io/badge/Free%20SMS%20Sender-v1.0.0-blue?style=for-the-badge&logo=electron)

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)
![Electron](https://img.shields.io/badge/Electron-27.0.0-47848F?logo=electron&logoColor=white)

## ✨ Fonctionnalités

- 🎨 **Design moderne** - Interface glassmorphism avec effets de flou et gradients
- 📱 **Envoi de SMS gratuit** - Utilise l'API officielle Free Mobile
- 💾 **Sauvegarde automatique** - Vos paramètres sont conservés entre les sessions
- ⚡ **Interface temps réel** - Compteur de caractères dynamique (160 max)
- 🔒 **Architecture sécurisée** - Electron avec contextIsolation activé
- 🖥️ **Multi-plateforme** - Fonctionne sur Windows, macOS et Linux
- 📦 **Version portable** - Exécutable sans installation
- ⌨️ **Raccourcis clavier** - Envoi rapide avec Ctrl+Entrée
- 🎯 **Interface intuitive** - Panneau de paramètres rétractable
- 🌈 **Animations fluides** - Transitions et effets visuels modernes

## 📸 Captures d'écran

### Interface principale
![Interface](https://i.imgur.com/TlpXSGr.png)

*Interface utilisateur moderne avec design glassmorphism*

### Panneau de paramètres
![Paramètres](https://i.imgur.com/NyHa4tI.png)

*Configuration facile des identifiants Free Mobile*

## 🚀 Installation rapide

### Prérequis
- **Node.js** (≥ 14.0.0) - [Télécharger](https://nodejs.org/)
- **npm** ou **yarn** - Inclus avec Node.js
- **Compte Free Mobile** avec option SMS activée

### Méthode 1: Installation depuis les sources

```bash
# 1. Cloner le repository
git clone https://github.com/o2Cloud-fr/FreeMobile-API-SMS.git

# 2. Aller dans le dossier
cd FreeMobile-API-SMS

# 3. Installer les dépendances
npm install

# 4. Lancer l'application
npm start
```

### Méthode 2: Téléchargement direct

1. Rendez-vous dans la section [**Releases**](https://github.com/o2Cloud-fr/FreeMobile-API-SMS/releases)
2. Téléchargez la version correspondant à votre système
3. Exécutez le fichier téléchargé

## 🔧 Configuration Free Mobile

### Étape 1: Activation de l'option SMS
1. Connectez-vous à votre **Espace Abonné Free Mobile**
2. Allez dans **Mes Options**
3. Activez l'option **"Notifications par SMS"**

### Étape 2: Récupération de la clé API
1. Dans votre espace client, section **Mes Options**
2. Notez votre **clé d'identification** (affiché sous l'option SMS)
3. Votre identifiant est votre **numéro de téléphone Free Mobile**

### Étape 3: Configuration dans l'application
1. Cliquez sur **"⚙️ Paramètres de connexion"**
2. Saisissez votre **identifiant Free Mobile** (votre numéro)
3. Saisissez votre **clé API**
4. Optionnel: Ajoutez un **numéro destinataire** par défaut

## 📦 Build et distribution

```bash
# Build pour Windows (x64 + x86)
npm run build-win

# Build pour macOS (Intel + Apple Silicon)
npm run build-mac

# Build pour Linux (x64)
npm run build-linux

# Build pour toutes les plateformes
npm run dist-all

# Build de développement
npm run build
```

### Fichiers générés

Les builds sont créés dans le dossier `dist/` :

**Windows:**
- `Free SMS Sender-1.0.0-x64.exe` (Installateur 64-bit)
- `Free SMS Sender-1.0.0-ia32.exe` (Installateur 32-bit)
- `Free SMS Sender-1.0.0-x64-portable.exe` (Portable 64-bit)
- `Free SMS Sender-1.0.0-ia32-portable.exe` (Portable 32-bit)

**macOS:**
- `Free SMS Sender-1.0.0-x64.dmg` (Intel Mac)
- `Free SMS Sender-1.0.0-arm64.dmg` (Apple Silicon)

**Linux:**
- `Free SMS Sender-1.0.0-x64.AppImage` (AppImage)
- `Free SMS Sender-1.0.0-x64.deb` (Package Debian/Ubuntu)

## 🛠️ Technologies utilisées

| Technology | Version | Description |
|------------|---------|-------------|
| ![Electron](https://img.shields.io/badge/Electron-27.0.0-47848F?logo=electron) | 27.0.0 | Framework pour applications desktop |
| ![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?logo=node.js) | 14.0.0+ | Runtime JavaScript |
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) | 5 | Structure de l'interface |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) | 3 | Styles et animations |
| ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) | ES6+ | Logique applicative |

## 📋 Guide d'utilisation

### 1. Premier lancement
1. **Configurer** - Ouvrez les paramètres et saisissez vos identifiants Free Mobile
2. **Vérifier** - Testez la connexion avec un message court
3. **Utiliser** - L'application est prête !

### 2. Envoi d'un SMS
1. **Écrire** - Tapez votre message dans la zone de texte (max 160 caractères)
2. **Vérifier** - Le compteur indique le nombre de caractères utilisés
3. **Envoyer** - Cliquez sur le bouton ou utilisez `Ctrl+Entrée`
4. **Confirmer** - Un message de statut confirme l'envoi

### 3. Raccourcis clavier
- `Ctrl + Entrée` - Envoyer le message
- `Esc` - Fermer les paramètres
- `F5` - Actualiser l'application

## 🔐 Sécurité et confidentialité

### Mesures de sécurité implémentées
- ✅ **contextIsolation** activé pour isoler les contextes
- ✅ **nodeIntegration** désactivé par défaut
- ✅ Communication sécurisée via **IPC** (Inter-Process Communication)
- ✅ Aucun stockage des mots de passe en clair
- ✅ Chiffrement des communications avec l'API Free Mobile (HTTPS)

### Données stockées localement
- Identifiant Free Mobile
- Clé API (chiffrée)
- Numéro destinataire par défaut
- Préférences d'interface

*Les données sont stockées dans votre répertoire utilisateur dans le fichier `config.json`*

## 🐛 Résolution des problèmes

### Codes d'erreur Free Mobile

| Code | Description | Solution |
|------|-------------|----------|
| **400** | Paramètres manquants ou incorrects | Vérifiez vos identifiants et le format du message |
| **402** | Quota SMS dépassé ou option non activée | Activez l'option SMS dans votre espace Free Mobile |
| **500** | Erreur serveur Free Mobile | Réessayez plus tard, problème côté Free |

### Problèmes courants

#### L'application ne se lance pas
```bash
# Vérifiez votre version de Node.js
node --version

# Réinstallez les dépendances
rm -rf node_modules
npm install
```

#### Erreur de connexion
1. ✅ Vérifiez votre connexion internet
2. ✅ Confirmez que l'option SMS est activée sur Free Mobile
3. ✅ Vérifiez la validité de votre clé API
4. ✅ Testez depuis un autre réseau

#### Messages non reçus
1. ✅ Vérifiez le numéro destinataire
2. ✅ Confirmez que le destinataire peut recevoir des SMS
3. ✅ Respectez la limite de 160 caractères

## 📊 Statistiques du projet

![GitHub stars](https://img.shields.io/github/stars/o2Cloud-fr/FreeMobile-API-SMS?style=social)
![GitHub forks](https://img.shields.io/github/forks/o2Cloud-fr/FreeMobile-API-SMS?style=social)
![GitHub issues](https://img.shields.io/github/issues/o2Cloud-fr/FreeMobile-API-SMS)
![GitHub pull requests](https://img.shields.io/github/issues-pr/o2Cloud-fr/FreeMobile-API-SMS)

## 📝 Roadmap

### Version 1.1.0 (En cours)
- [ ] 🌙 **Mode sombre/clair** - Thème adaptatif
- [ ] 📚 **Carnet de contacts** - Gestion des destinataires
- [ ] 📊 **Historique des messages** - Conservation des SMS envoyés
- [ ] 🔔 **Notifications système** - Confirmations d'envoi

### Version 1.2.0 (Prévue)
- [ ] ⏰ **Programmation d'envoi** - SMS différés
- [ ] 🔄 **Envoi en masse** - Messages groupés
- [ ] 🌐 **Support multi-comptes** - Plusieurs comptes Free Mobile
- [ ] 📱 **Templates de messages** - Messages prédéfinis

### Version 2.0.0 (Long terme)
- [ ] 📈 **Statistiques d'utilisation** - Analytics détaillées
- [ ] 🔌 **API REST** - Contrôle externe de l'application
- [ ] 🎨 **Thèmes personnalisables** - Personnalisation avancée
- [ ] 🌍 **Internationalisation** - Support multi-langues

## 🤝 Contribution

Les contributions sont les bienvenues ! Suivez ces étapes :

### Pour les développeurs
1. **Fork** le projet
2. **Créez** une branche feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. **Committez** vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`)
4. **Push** sur la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. **Ouvrez** une Pull Request

### Pour les non-développeurs
- 🐛 **Signaler des bugs** via les [Issues](https://github.com/o2Cloud-fr/FreeMobile-API-SMS/issues)
- 💡 **Proposer des améliorations** via les [Discussions](https://github.com/o2Cloud-fr/FreeMobile-API-SMS/discussions)
- ⭐ **Mettre une étoile** si le projet vous plaît
- 📢 **Partager** le projet avec vos contacts

### Guidelines de contribution
- Respectez le style de code existant
- Ajoutez des tests pour les nouvelles fonctionnalités
- Mettez à jour la documentation si nécessaire
- Utilisez des messages de commit descriptifs

## 📄 Licence

Ce projet est sous licence **MIT**. Consultez le fichier [LICENSE](LICENSE) pour plus de détails.

```
MIT License

Copyright (c) 2024 o2Cloud

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## ⚠️ Disclaimer

Cette application utilise l'**API officielle Free Mobile**. 

**Responsabilités :**
- Respectez les [conditions d'utilisation](https://mobile.free.fr/account/cgu) de Free Mobile
- N'abusez pas du service SMS (respect des quotas)
- L'auteur n'est pas responsable des usages inappropriés
- Utilisez cette application à vos propres risques

**Limitations :**
- Service disponible uniquement pour les abonnés Free Mobile
- Quota de SMS limité par Free Mobile
- Dépendant de la disponibilité de l'API Free Mobile

## 👨‍💻 Auteur

**o2Cloud**
- 🌐 GitHub: [@o2Cloud-fr](https://github.com/o2Cloud-fr)
- 📧 Email: [github@o2cloud.fr](mailto:github@o2cloud.fr)
- 💼 LinkedIn: [Rémi Simier](https://www.linkedin.com/in/remi-simier-2b30142a1/)
- 🌍 Website: [o2cloud.fr](https://o2cloud.fr)

## 🙏 Remerciements

- **Free Mobile** pour leur API publique et gratuite
- **Electron Team** pour le framework et la documentation excellente
- **La communauité open-source** pour les inspirations et contributions
- **Tous les testeurs** qui ont aidé à améliorer l'application
- **Vous** pour utiliser et soutenir ce projet !

## 📈 Support et communauté

### Obtenir de l'aide
- 📚 **Documentation** - Consultez ce README et le [Wiki](https://github.com/o2Cloud-fr/FreeMobile-API-SMS/wiki)
- 🐛 **Bugs** - Signalez sur [Issues](https://github.com/o2Cloud-fr/FreeMobile-API-SMS/issues)
- 💬 **Questions** - Posez vos questions dans [Discussions](https://github.com/o2Cloud-fr/FreeMobile-API-SMS/discussions)
- 📧 **Contact direct** - [github@o2cloud.fr](mailto:github@o2cloud.fr)

### Communauté
- ⭐ **Stars** - Suivez l'évolution du projet
- 👀 **Watch** - Soyez notifié des nouveautés
- 🍴 **Fork** - Créez votre propre version
- 🗣️ **Discussions** - Échangez avec la communauté

---

<div align="center">

**⭐ N'oubliez pas de mettre une étoile si ce projet vous a été utile ! ⭐**

[![GitHub stars](https://img.shields.io/github/stars/o2Cloud-fr/FreeMobile-API-SMS?style=for-the-badge&logo=github)](https://github.com/o2Cloud-fr/FreeMobile-API-SMS/stargazers)

*Fait avec ❤️ par [o2Cloud](https://github.com/o2Cloud-fr)*

</div>
