// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "Describe the purpose of your project.",
    "What commands should you run to install dependencies?",
    "Describe how to use the application.",
    "Pick a license type.",
    "How can others contribute to your project?",
    "What command should be run to test the project?",
    "Provide your GitHub username.",
    "Provide your email address."
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log("Successfully created a new file!"));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "title",
                message: questions[0],
            },
            {
                type: "input",
                name: "description",
                message: questions[1],
            },
            {
                type: "input",
                name: "installation",
                message: questions[2],
            },
            {
                type: "input",
                name: "usage",
                message: questions[3],
            },
            {
                type: "list",
                name: "license",
                message: questions[4],
                choices: [
                    "Apache 2.0 License",
                    "GNU GPLv3",
                    "MIT",
                    "ISC License"
                ]
            },
            {
                type: "input",
                name: "contributing",
                message: questions[5],
            },
            {
                type: "input",
                name: "testing",
                message: questions[6],
            },
            {
                type: "input",
                name: "github",
                message: questions[7],
            },
            {
                type: "input",
                name: "email",
                message: questions[8],
            },
        ])
        .then((answers) => {
            writeToFile("README.md",generateMarkdown.generateMarkdown(answers))
        });
}

// Function call to initialize app
init();
