# Simple phonebook

## What does it stand for?
One page app using heroku app for backend. Allows to sign up, log in and log out new users. With possibility to menage contacts list like adding, removing and editing contact data with filtering option.
The app is based on Vite & React.js. It includes notilfix notifications and uses axios to get back-end data. The app uses routing from router-dom for client authorization and authentification.


## How to install and run?

Included depedencies:

### $ npm install

### $ npm intall vite

### $ npm install @reduxjs/toolkit

### $ npm install @reduxjs/toolkit react-redux

### $ npm install axios

### $ npm install redux-persist

### $ npm install react-router-dom

### $ npm install react-loader-spinner --save

### $ npm install notiflix

### $ npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion

### $ npm install @chakra-ui/icons


## GitHub-pages deployment:

### $ npm install gh-pages --save-dev

Add script in package.json:

### "scripts": { "deploy": "npm run build && gh-pages -d dist" },

### $ npm run deploy


## How to use the app?

First of all you have to create new user using your name, email and password (it has to contain at least 8 characters). Then you can log in and in library you can create your contact list. You can filter your list by names.

## Credits

This roject was made as homework during my bootcamp from GoIT "Full-stack developer course". It had to include most of used libraries. I've made my own notification system and stylized app by myself.
