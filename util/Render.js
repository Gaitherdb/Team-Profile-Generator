//takes the array of created employees (team)
function generateHTML(team) {
    var employees = [];
    //from array of team members, filter out any that have a role manager, and for each of those, run the renderManager function
    employees.push(...team
        .filter(manager => manager.getRole() === "Manager")
        .map(manager => renderManager(manager)))
    //from array of team members, filter out any that have a role engineer, and for each of those, run the renderEngineer function
    employees.push(...team
        .filter(engineer => engineer.getRole() === "Engineer")
        .map(engineer => renderEngineer(engineer)))
    //from array of team members, filter out any that have a role intern, and for each of those, run the renderIntern function
    employees.push(...team
        .filter(intern => intern.getRole() === "Intern")
        .map(intern => renderIntern(intern)))
    //employees variable now contains the rendered html for each selected type of employee
    //take the employee variable, get rid of any commas within the array, and add that to the base HTML aka renderHTML
    let HTML = renderHTML(employees.join(""));
    return HTML;
}

function renderHTML(cards) {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/fc8338d42b.js" crossorigin="anonymous"></script>
    <title>Team Profile</title>
</head>

<body>
    <div>
        <div class="jumbotron-fluid bg-danger h-25 w-100 p-3">
            <h1 class="text-center">My Team</h1>
        </div>
    </div>
    <div class="container">
        <div class="row row-cols-auto d-flex justify-content-center">     
${cards}
        </div>
    </div>
</body>

</html>`
}

function renderManager(manager) {
    let name = manager.getName();
    let role = manager.getRole();
    let id = manager.getId();
    let email = manager.getEmail();
    let officeNumber = manager.getOfficeNumber();

    return `
   <div class="card col" style="width: 18rem; margin: 10px;">
                    <div class="card-header bg-primary text-light">
                        <h2 class="card-title">${name}</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot"></i> ${role}</h3>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                        <li class="list-group-item">Office Number: ${officeNumber}</li>
                    </ul>
                </div>
                `
}

function renderEngineer(engineer) {
    let name = engineer.getName();
    let role = engineer.getRole();
    let id = engineer.getId();
    let email = engineer.getEmail();
    let github = engineer.getGithub();
    return `<div class="card col" style="width: 18rem; margin: 10px;">
                    <div class="card-header bg-primary text-light">
                        <h2 class="card-title">${name}</h2>
                        <h3 class="card-title"><i class="fas fa-glasses"></i> ${role}</h3>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                        <li class="list-group-item">Github: <a href="https://github.com/${github}">${github}</a></li>
                    </ul>
                </div>
                `
}

function renderIntern(intern) {
    let name = intern.getName();
    let role = intern.getRole();
    let id = intern.getId();
    let email = intern.getEmail();
    let school = intern.getSchool();
    return `
    <div class="card col" style="width: 18rem; margin: 10px;">
    <div class="card-header bg-primary text-light">
        <h2 class="card-title">${name}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate"></i> ${role}</h3>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
        <li class="list-group-item">School: ${school}</li>
    </ul>
</div>
`
}

module.exports = generateHTML;