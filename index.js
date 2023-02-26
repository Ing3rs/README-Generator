const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        // project title
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        // project description
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project',
    },
    {
        // installation
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        // usage
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions (make sure to include screenshots later).',
    },
    {
        // license [how do make it add the badge??]
        type: 'checkbox',
        name: 'license',
        message: 'Which license would you like to use for your project?',
        choices: ['MIT', 'Other', 'GPLv2', 'Apache', 'GPLv3'],
    },
    {
        // contributing
        type: 'input',
        name: 'contributing',
        message: 'Would you like other developers to contribute to your project? If so, please tell me how they can do this.',
    },
    {
        // tests
        type: 'input',
        name: 'tests',
        message: 'Have you written any tests for your application? Provide examples on how to run them.',
    },
    {
        // questions - github username
        type: 'input',
        name: 'githubUsername',
        message: 'Almost done... what is your GitHub username?',
    },
    {
        // questions - email address
        type: 'input',
        name: 'email',
        message: 'Last question! What is the best email address for people to contact you at?',
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
