// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = required('utils');

const generatorMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of the project?',
    name: 'Title',
}, {
    type: 'input',
    message: 'What is the project about? Give a detailed description.',
    name: 'Description',
}, {
    type: 'input',
    message: 'Table of Contents.',
    name: 'Table of Contents',
}, {
    type: 'input',
    message: 'What does the user need to install in order to run app?',
    name: 'Installation',
}


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
