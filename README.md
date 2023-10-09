# Simple phonebook [![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-gray)](https://marikagk.github.io/simple-phonebook/)

One page app using heroku app for backend. Allows to sign up, log in and log out new users. With possibility to menage contacts list like adding, removing and editing contact data with filtering option.
The app is based on Vite & React.js. It includes notilfix notifications and uses axios to get back-end data. The app uses routing from router-dom for client authorization and authentification.


---

## Abouth the Author

- [MarikaGK](https://github.com/MarikaGK/)

---

## Project goal

The aim of the project was to practice working with React.js, and also react-router with usage of private routes, JWT authorization and authentication. I also used ChakraUI library for styling components.

---


## Contents

- [Technologies used](#technologies-used)
- [Installation](#Installation)
- [Activation](#Activation)
- [Scope of functionality](#Scope-of-functionality)
- [Project status](#Project-status)
- [Sources](#Sources)

---

## Technologies used


- `ReactJS version 18.2.0` - work with React reusable components
- `react-router version 6.15.0` - usage of redirections between public and private routes
- `react-redux version 8.1.2` - redux store for managing respondes coming from database
- `redux-persist version 6.0.0` - for client authorization and authentication
- `notiflix version 3.2.6` - user's notifications
- `react-loader-spinner version 5.4.5` - for lazy load of routes

---

## Installation

To install the application, make sure there is LTS version of Node.js installed on your computer  [Download and install](https://nodejs.org/en/)

Then install all dependencies contained in the file package.json by entering the
`npm install` command in the terminal

---

## Activation

According to the `package.json` documentation, to run the project you need to use the `npm run dev` command

---

## GitHub-pages deployment:

Simple phonebook is based on Vite. To deploy your own project, you have to use `npm install gh-pages --save-dev` command

Next you have to add script in package.json:

`"scripts": { "deploy": "npm run build && gh-pages -d dist" },`

And run `npm run deploy` in command line

---

## Scope of functionality



---


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

First of all you have to create new user using your name, email and password (it has to contain at least 8 characters). Then you can log in and you can create your contact list in library. You can filter your list by names.

## Sources

The project is based on a project created at the GoIT JavaScript Full Stack
bootcamp Developer. It meets the design criteria imposed during the course and
complements them with additional functionalities I've implemented on my own (functionality of contact edition)





To install the application, make sure it is installed on your computer LTS
version of Node.js [Download and install](https://nodejs.org/en/)

Then install all dependencies contained in the file package.json by entering the
`npm install` command in the terminal

---

## Activation

According to the `package.json` documentation, to run the project you need to use the `npm start` command

---

## Scope of functionality

- RWD and user friendly

![Desktop](./assets/Screenshot_134.png) ![Tablet](./assets/Screenshot_135.png)
![Mobile](./assets/Screenshot_136.png)

![Paginacja](./assets/Screenshot_142.png)

- Follow movie trends: watch trailers, check ratings, movie descriptions, genres

![Modal Desktop](./assets/Screenshot_138.png)
![Modal Tablet](./assets/Screenshot_139.png)
![Modal Mobile](./assets/Screenshot_140.png)

- Search for titles that interest you using the `Search` function\

![Searched](./assets/Screenshot_137.png)

- Create an account on the website using your Google account

  ![Google account](./assets/Screenshot_141.png)

- Manage your private video collection by one click add movies in two queues: `Watched` and `Queue`

  ![Watched&Queue](./assets/Screenshot_145.png)

- Switch light/dark mode

  ![Dark mode](./assets/Screenshot_143.png)

#### Todo

- Added the functionality of sorting films by genre

## Project status

The basic version of the project has been completed and the application is
working

## Sources

The project is based on a project created at the GoIT JavaScript Full Stack
bootcamp Developer. It meets the design criteria imposed during the course and
complements them with additional functionalities implemented by our Team (modal
window presenting the trailer, authorization using a Google account via
Firebase, sorting by film genres or light/dark mode switcher)

