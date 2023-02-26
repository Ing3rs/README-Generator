const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where are you from?',
    },
    {
        type: 'xxx',
        name: 'xxx',
        message: 'xxx',
    },
];

// function to write README file
function writeToFile(fileName, data) {

    // write data to README file
    fs.writeFile('test.md', (data), (err) =>

    // give success message if written to README, otherwise error
        err ? console.error(err) : console.log("Successfully written to README!")
    );
}

// function to initialize program
function init() {

    // prompt user with questions array
    inquirer.prompt(questions)

        // then generate README file with user answer
        .then((data) => writeToFile('test.md', generateMarkdown(data)))

        // provide success message, otherwise error
        .then(() => console.log('Thank you for completing all the questions!'))
        .catch((err) => console.error(err));
}

// function call to initialize program
init();
