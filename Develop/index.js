

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generatorMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
// Added questions in array to prompt for user input for the generator
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
    },

    {
        type: "input",
        name: "description",
        message: "Provide a short description explaining the what, why, and how of your project.",
    },

    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",
    },

    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use: To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:![alt text](assets/images/screenshot.png)",
    },

    {
        type: "input",
        name: "credits",
        message: "List your collaborators, if any, with links to their GitHub profiles.",
    },

    {
        type: "list",
        name: "license",
        message: "Please select which license you'd like to use for this project:",
        choices: ["MIT License", "Apache License 2.0", "GNU Generl Public License v3.0", "Mozilla Public Licens 2.0", "none"],
    },

    {
        type: "input",
        name: "tests",
        message: "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
    },

    {
        type: "input",
        name: "github",
        message: "What is the link for your github profile?",
    },

    {
        type: "input",
        name: "email",
        message: "Please enter your email address:",
    }
    
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => {
        if(err) {
            return console.log(err)
        }
        console.log("Success")
    })
}

// TODO: Create a function to initialize app
const init = async () => {
    //  Pormpt for user input
try {
    const userInput = await inquirer.prompt(questions);

    console.log(userInput);

    let readmeData = generatorMarkdown(userInput);

    writeToFile("README.md", readmeData);
} catch (error) {
    console.error(error)
}
};

// Function call to initialize app
init();
