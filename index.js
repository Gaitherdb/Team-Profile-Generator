const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require('./src/generateHTML.js');
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is the team manager's name?`,
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the team manager's ID?`,
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the team manager's email?`,
        },
        {
            type: 'input',
            name: 'officenumber',
            message: `What is the team manager's office number?`,
        },
    ]);
};

function addTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addteam',
            message: `Which type of team member would you like to add?`,
            choices: ['Engineer', 'Intern', `I don't want to add more team members`],
        }
    ])
        .then((answer) => {
            switch (answer.addteam) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                default:
                    generateTeam();
                    break;
            }
        })
}
function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is your engineer's name?`,
        },
        {
            type: 'input',
            name: 'id',
            message: `What is your engineer's ID?`,
        },
        {
            type: 'input',
            name: 'email',
            message: `What is your engineer's email?`,
        },
        {
            type: 'input',
            name: 'github',
            message: `What is your engineer's GitHub username?`,
        },
    ])
        .then((answers) => {
            // let manage = New Manager(answers.name, answers.id, answers.email, answers.officenumber)
            addTeam();
        })
}
function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is your intern's name?`,
        },
        {
            type: 'input',
            name: 'id',
            message: `What is your intern's ID?`,
        },
        {
            type: 'input',
            name: 'email',
            message: `What is your intern's email?`,
        },
        {
            type: 'input',
            name: 'school',
            message: `What school did your intern go to?`,
        },
    ])
        .then((answers) => {
            // let manage = New Manager(answers.name, answers.id, answers.email, answers.officenumber)
            addTeam();
        })
}
function generateTeam(){
    console.log("hi")
// .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
//         .then(() => console.log('Successfully wrote to index.html'))
//         .catch((err) => console.error(err));
}
const init = () => {
    console.log("Please build your team")
    promptUser()
        .then((answers) => {
            // let manage = New Manager(answers.name, answers.id, answers.email, answers.officenumber)
            addTeam();
        })
        .catch((err) => console.error(err));
};

init();

