const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);


const promptUser = () =>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is your name?'

        },
        {
            type: 'input',
            name: 'location',
            message: 'where are you from'
        },
        {
            type: "input",
            name: "hobby",
            message: "What is your favorite hobby?"
          },
          {
            type: "input",
            name: "food",
            message: "What is your favorite food?"
          },
          {
            type: "input",
            name: "github",
            message: "Enter your GitHub Username"
          },
          {
            type: "input",
            name: "linkedin",
            message: "Enter your LinkedIn URL."
          }

    ])
}

let generateHTML = ({name, location, github, linkedin}) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">

    </head>
    <body>
    <div class="jumboton jumboton-fluid">
    <div class="container">
        <h1 class="display-4">My name is ${name}</h1>
        <p class="lead">I am from ${location}</p>
        <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
        <ul class="list-group">
          <li class="list-group-item">My GitHub username is ${github}</li>
          <li class="list-group-item">LinkedIn: ${linkedin}</li>
        </ul>

    </div>

</div>
        
        
    </body>
    </html>`

}

promptUser()
    .then((answers) => {
        const html = generateHTML(answers);

        return writeFileAsync(`${answers.name}.html`, html)
    })
    .then(() => {
        console.log('--------> u did it')
    })
    .then(() => {
        console.log('----->another?')
    })
    .catch((err) => {
        console.log(err)
    })