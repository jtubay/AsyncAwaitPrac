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
    

}

const init = async() => {
    console.log('hi')
    try {
        const answers = await promptUser()
        console.log(answers)
        const html =  generateHTML(answers)
        await writeFileAsync('index.html', html)
    } catch(err) {
        console.log(err);
    }
}

init()