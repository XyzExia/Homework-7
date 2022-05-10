
// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { markAsUntransferable } = require('worker_threads');
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    
    {
        type: "input",
        name: "description",
        message: "Type description here."
    },
    
    {
        type: "input",
        name: "installation",
        message: "How do you install it?"
    },
    
    {
        type: "input",
        name: "usage",
        message: "How do you use it?"
    },
    
    {
        type: "input",
        name: "contribution",
        message: "What is your contribution?"
    },
    
    {
        type: "input",
        name: "test",
        message: "How do you run test?"
    },
    
    {
        type: "list",
            message: "what is your license? ",
            name: "license",
            choices: [
    
                    "None",
                    "Apache-2.0",
                    "gpl-license",
                    "MIT",
            ]
    },
    
    {
        type: "input",
        name: "username",
        message: "What is your Github username?"
    },
    
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    
    {
        type: "input",
        name: "repo",
        message: "What is your repo link?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('goodstuff')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions).then((data)=>{
        console.log(data)
        writeToFile("./README.md", data)
    });
    
    
    
}

// Function call to initialize app
init();
