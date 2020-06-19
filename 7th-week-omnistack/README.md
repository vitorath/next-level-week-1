# 7th week Omnistack

**Install before you begin:** [nodejs](https://nodejs.org/en/download/package-manager/), [npm](https://www.npmjs.com/package/npm) e [yarn](https://yarnpkg.com/en/).
**Plugins VSCode (Optional):** Dracule theme, Material theme icon e Fira code.
> With VSCode open press CTRL + SHIFT + P and access Settings.json. In this file add **edtior.fontFamily: "Fira Code"** and **editor.fontLigatures: true**

**Packages used in the backend (NodeJs):**
```
$ yarn init -y 		
$ yarn add express	# Routes
$ yarn add nodemon -D	# Auto-restart
$ yarn add mongoose	# MongoDB dependency (Relational database Sequelize)
$ yarn dev		# Start (dev)
$ yarn add multer	# Multipart files
$ yarn add sharp	# Controls image
$ yarn add cors
$ yarn add socket.io	# Message (Realtime)
```
**Packages used in the frontend (React)**
```
$ create-react-app 'name'
$ yarn add react-router-dom	# Routes
$ yarn add axios		# Requests and response (backend)
$ yarn add socket.io-client
```
**Packages used in the mobile (React-native):**
```
$ react-native init instarocket				  # Create project
$ react-native run-android				  # Run in android 
$ react-native start [--reset-cache]			  # Start to bind with emulator
$ yarn add react-navigation react-native-gesture-handler  # Gesture navigation
$ react-native link react-native-gesture-handler	  # Setting Gesture navigation in native code
$ yarn add axios
$ yarn add socket.io-client
$ yarn add react-native-image-picker
```
**Additional:**
```
$ yarn add eslint -D [-D develop]
$ yarn eslint --init [In this case the chosen pattern: airbnb]
```
> VSCode add in Settings.json **eslint.autoFixOnSave: true** 
```
$ yarn add styled-components 
```
> VSCode extension: **styled-components**

**Ideias for future layouts:** dribbble and sketchappsource


