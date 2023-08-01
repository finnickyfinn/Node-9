// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "Please enter project title: ",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('You must enter a title');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'desc',
        message: "Please enter project description: ",
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('You must enter a project description');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: "Please enter installation instructions for the project: ",
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You must enter installation instructions');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: "Please enter test instructions for the project: ",
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('You must give test instructions');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: "Please enter usage instructions for the project: ",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You must enter usage instructions');
                return false
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: "Please select licence for this project",
        choices: ["GNU AGPLv3","GNU GPLv3","GNU LGPLv3","Mozilla Public License 2.0", "Apache 2.0","MIT","Boost Software License 1.0","The Unlicense"]
    },
    {
        type: 'input',
        name: 'github',
        message: "Please enter your github username: ",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('You must enter your github username');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter your email address",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('You must enter your email address');
                return false
            }
        }

    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((res) => {
        writeToFile('./output/README.md', generateMarkdown({ ...res}));
    })
}

// Function call to initialize app
init();