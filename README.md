<h1 align="center"><b>Full Stack Engineer Coding Challenge
</b></h1>

[![Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.](https://www.repostatus.org/badges/latest/wip.svg)](https://github.com/maxwellwachira/FastAPI-Mail.git)

# Description

In this code challenge you will build a ReactJS web app from the ground up. You have to setup a GraphQL client to query our GraphQL API endpoint https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql. The API will return a book object. 
More details on the challenge description can be found [here](https://github.com/ElloTechnology/full-stack-test#readme)

# Demo
I have a deployed my solution on [Netlify](https://www.netlify.com/)<br>
click the following link to check my solution [https://ello-challenge.netlify.app/](https://ello-challenge.netlify.app/)


# Table of contents
* [Prerequisites](#Prerequisites)
* [Directory Structure](#Directory-Structure)
* [Running Locally](#Setting-up-Local-Environment)
* [Acknowledgement](#Acknowledgement)
* [License](#License)


# Prerequisites
- [Node JS Installed ](https://nodejs.org/en/download/)



# Directory-Structure
    ello-challenge
    ├── public			             
    |   ├── index.html  
    |	└── favicon.ico  
    ├── src
    |   ├── components
    |   |   ├── Header 
    |   |   |   ├── Header.js
    |   |   |   └── Header.styles.js
    |   |   └── Page
    |   |       ├── Page.js
    |   |       └── Page.styles.js
    |	├── hooks
    |   |   └── Page.styles.js 
    |   ├── api.js
    |   ├── App.js
    |   ├── GlobalStyles.js
    |   └── index.js
	├── .gitignore   
	├── package-lock.json               
    ├── package.json		 
	└── README.md

# Setting-up-Local-Environment
### Step 1
clone the repository and navigate to the project directory
```bash
git clone https://github.com/maxwellwachira/ello-challenge
cd ello_challenge/
```
### Step 2
Check package.json file and ensure scripts are notated as below:
```bash
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```
### Step 3
Delete the node_modules folder and any 'lock' files such as yarn.lock or package-lock.json if present.

### Step 4
Run npm install
```bash
npm install
```
### Step 5
final step
```bash
npm run start
```

# Acknowledgement
Special thanks to @James Mwangi for the interesting challenge


## <b>License</b>
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge)](LICENSE)