// Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

const writeFile = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questionArr = [
    // username
    {type: "input", message: "What is your gitHub username?", name: "user"},
    // email
    {type: "input", message: "What is your email address?", name: "email"},
    // projectTitle
    {type: "input", message: "What is your project title?", name: "title"},
    // description
    {type: "input", message: "Please describe your project.", name: "description"},
    // installation instructions
    {type: "input", message: "Please describe how users can install this project.", name: "installation"}, 
    // usage
    {type: "input", message: "Please describe how users might make use of this project.", name: "usage"},
    // license - I had to take all my licensing info from fullstack forums
    {type: "list", message: "What license should your project use?", name: "license", choices: ["MIT", "Unlicense", "Apache 2.0", "GNU v3", "BSD 3-Clause", "Mozilla Public License 2.0"]},
    // contributing
    {type: "input", message: "What should a user know about contributing to your project?", name: "contribute"},
    // test
    {type: "input", message: "What command should be run to perform testing?", name: "test", default: "npm run test"},
    
];

const promptUser = () => { 
    return inquirer.prompt(questionArr);
};
// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    return writeFile(fileName, data);
};

// TODO: Create a function to initialize app
const init = async () => {
    try {
        console.log("Welcome! \nPlease answer the following questions.")

        const answerData = await promptUser();

        const fileContent = generateMarkdown(answerData);

        await writeToFile("./output/README.md", fileContent);

        console.log("A new README file has been created in the output folder.");

    } catch (err) {
        console.error("There was an error creating the README file.");
        console.log(err);
    }
};

// Function call to initialize app
init();
