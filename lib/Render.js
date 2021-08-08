const fs = require("fs");
const path = require("path");
const srcPath = path.resolve(__dirname, "../src");

function generateHTML(team) {
    var employees = [];

    employees.push(...team
        .filter(manager => manager.getRole() === "Manager")
        .map(manager => renderManager(manager)))

    employees.push(...team
        .filter(engineer => engineer.getRole() === "Engineer")
        .map(engineer => renderManager(engineer)))

    employees.push(...team
        .filter(intern => intern.getRole() === "Intern")
        .map(intern => renderManager(intern)))

    var e = JSON.stringify(employees);
    console.log(e);
    return e;
}

function renderManager(manager) {
    console.log("----");
    console.log(manager);
    console.log("-----");
    return manager
}

function renderEngineer(engineer) {
    console.log("----");
    console.log(engineer);
    console.log("-----");
    return engineer
}

function renderIntern(intern) {
    return intern
}
module.exports = generateHTML;