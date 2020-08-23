const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/Intern");
// const Employee = require("./Develop/lib/Employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// const outputPath_DIR = path.resolve(__dirname, "output");
const outputPath = path.resolve(__dirname, "output", "team.html");

const render = require("./Develop/lib/htmlRenderer");
// const choice = require("inquirer/lib/objects/choice");

var PORT = 3000;

// Write code to use inquirer to gather information about the development team members,
const teamMembers =[];
const ids = [];

function appTeam(){

    function createManager (){
    inquirer.prompt([
            { type: "list",
              name: "managerOff",
              message: "What is the Location Office Number?",
              choices: [ '102938', '928374', '857463']
        },
              {
                type: "input",
                name: "managerName",
                message: "Please enter the Manager's first and last name." 
            
        },
              { type: "input",
              name: "managerId",
              message: "Please input Manager's ID number."

        },
            {
                type: "input",
                name: "managerEmail",
                message: "Please enter Manager's company email address."
            },
            {
                
                type: "input",
                name: "officeNumber",
                message: "What is the office phone number?"
               
              }
         
    ]).then(answers => {
        const manager = new Manager (answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice)
        teamMembers.push(manager);
        ids.push(answers.managerId);
        createTeam ();
    })
}
function createTeam(){
    inquirer.prompt([
        {
            type:"list",
            name: "memberChoice",
            message: "What Type of Member do you want to add?",
            choices:[ "Engineer", "Intern", "I'm finished"],
            
        }
        
        ]).then(uSelection => {
         switch(uSelection.memberChoice) {
            case "Manager":
                addEngineer();
                break;
             case "Engineer":
             addEngineer();
             break;
             case "Intern":
             addIntern();
             break;
             default:
                 buildTeam ();
         }
        })

        
    }


function addEngineer(){
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Please enter this Engineer's first and last name.",
         
          },
          {
            type: "input",
            name: "engineerId",
            message: "Please enter the Engineer's ID number.",
          },
          {
            type: "input",
            name: "engineerEmail",
            message: "What is the Engineer's email address?",
          },
          {
            type: "input",
            name: "github",
            message: "What is their Github Username?",
          },
        //   {
        //     type:"list",
        //     message: "Would you like to add another member?",
        //     choices:[ "Engineer", "Intern", "I'm finished"] 
        
        //   }

]).then(answers => {
    const engineer = new Engineer (answers.engineerName, answers.engineerId, answers.engineerEmail,answers.github)
    teamMembers.push(engineer);
    ids.push(answers.engineerId);
    createTeam ();
})

}

function addIntern(){
inquirer.prompt([
    {
        type: "input",
        name: "internName",
        message: "Please enter the Intern's First and Last Name.",
        
      },
      {
        type: "input",
        name: "internId",
        message: "Please enter the 6 digit Intern ID number."

        },
     
      {
        type: "input",
        name: "internEmail",
        message: "Please enter the Intern Contact Email",

      },
      {
        type: "input",
        name: "internSchool",
        message: "What School does this Intern attend?",
    
      }
      
])
.then(answers => {
const intern = new Intern (answers.internName, answers.internId, answers.internEmail, answers.internSchool)
teamMembers.push(intern);
ids.push(answers.internId);

createTeam ();
});

}

function buildTeam(){
fs.writeFileSync(outputPath, render(teamMembers),"utf-8");
}

createManager();

}


appTeam();

// After the user has input all employees desired, call the `render` function (required above) and pass in an array containing all employee objects; the `render` function will generate and return a block of HTML including templated div for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML returned from the `render` function. Now write it to a file named `team.html` in the `output` folder. You can use the variable `outputPath` above target this location.


// Hint: you may need to check if the `output` folder exists and create it if it does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different information; write your code to ask different questions via inquirer depending on employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer, and Intern classes should all extend from a class named Employee; see the directions for further information. Be sure to test out each class and verify it generates an object with the correct structure and methods. This structure will be crucial in order for the provided `render` function to work!
