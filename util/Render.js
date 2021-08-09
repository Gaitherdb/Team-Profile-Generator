function generateHTML(team) {
    var employees = [];

    employees.push(...team
        .filter(manager => manager.getRole() === "Manager")
        .map(manager => renderManager(manager)))

    employees.push(...team
        .filter(engineer => engineer.getRole() === "Engineer")
        .map(engineer => renderEngineer(engineer)))

    employees.push(...team
        .filter(intern => intern.getRole() === "Intern")
        .map(intern => renderIntern(intern)))

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
        <div class="row">
            <div class="col-4 d-flex justify-content-center">
${cards}

            </div>
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
   <div class="card" style="width: 18rem">
                    <div class="card-header bg-primary text-light">
                        <h2 class="card-title">${name}</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot"></i>${role}</h3>
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
    return `<div class="card" style="width: 18rem;">
                    <div class="card-header bg-primary text-light">
                        <h2 class="card-title">${name}</h2>
                        <h3 class="card-title"><i class="fas fa-glasses"></i>${role}</h3>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                        <li class="list-group-item">Github: <a href="https://github.com/${github}">${github}</li>
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
    <div class="card" style="width: 18rem;">
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