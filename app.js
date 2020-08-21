const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// const outputPath_DIR = path.resolve(__dirname, "output");
const outputPath = path.resolve(__dirname, "output", "team.html");

const render = require("./lib/htmlRenderer");
// const choice = require("inquirer/lib/objects/choice");

var PORT = 3000;

// Write code to use inquirer to gather information about the development team members,
const teamMembers =[];
const idArray = [];

function appTeam(){

    function createManager (){
        inquirer.prompt([
        {
            type:"choice",
            name: ["Yes", "No"],
            message: "Are you the Manager?",
            validate: answer => {
                if (answer !== ""){
                return true;
            }
            return "Please have Manager enter information.";
        }
        },
        {
            type:"Input",
            name: "name",
            message: "What is Your Name?",
            validate: answer => {
                if (answer !== ""){
                return true;
            }
            return "Please enter at least 2 characters.";
        }
        },
        {
            type:"Input",
            name: "office",
            message: "What is Your Office Branch Number?"
        },
        {
            type:"Input",
            name: "id",
            message: "What is Your Employee ID Number?"
        },
        {
            type:"Input",
            name: "email",
            message: "What is Your Employee Email Address?"
        },
        {
            type:"Input",
            name: "employee",
            message: "Please add a member to your team."
        }  
        ])
        }

function createTeam(){
    inquirer.prompt([
        {
            type:"choice",
            name: "memberChoice",
            choices:["Manager", "Engineer", "Employee", "Intern"],
            message: "What Type of Member do You want to add?"
        }
        
        ]).then(uSelection => {
         switch(uSelection.memberChoice) {
             case "Manager":
             addManager();
             break;
             case "Engineer":
             addEngineer();
             break;
             case "Employee":
             addEmployee();
             break;
             case "Intern":
             addIntern();
             break;
             default:
                 buildTeam ();
         }
        })

        
    }

function addEmployee(){
    inquirer.prompt([
{
    type:"choice",
    name: ["Engineer","Employee", "Intern", "Manager",],
    message: "What is your Employment Title?"
},
{
    type:"input",
    name: "employeeName",
    message: "Please enter the First and Last Name."
},
{
    type:"input",
    name: "employeeID",
    message: "Please enter the six digit Employee ID number."
},
{
    type:"Input",
    name: "employeeEmail",
    message: "What is the Employee Email Address?"
},          
{
    type:"choice",
    name: ["Yes", "No"],
    message: "Would You Like to Add Another Member?"
},         
// Need and If Then Statement
{
    type:"choice",
    name: ["Engineer","Employee", "Intern","Manager"],
    message: "What is the Employment Title?"
},

]).then(answers => {
    const employee = new Employee (answers.employeeName, answers.employeeID, answers.employeeEmail)
    teamMembers.push(employee);
    idArray.push(answers.employeeId);
    createTeam ();
})
}
function addEngineer(){
    inquirer.prompt([

{
    type:"input",
    name: "EmployeeName",
    message: "Please enter the First and Last Name."
},
{
    type:"input",
    name: "EmployeeID",
    message: "Please enter the six digit Employee ID number."
},
{
    type:"input",
    name: "Email",
    message: "What is the Employee Email Address?"
}, 
{
    type:"input",
    name: "GitHub",
    message: "What is the Employee GitHub Username?"
},                   
{
    type:"choice",
    name: ["Yes", "No"],
    message: "Would You Like to Add Another Member?"
},         
]).then(answers => {
    const engineer = new Engineer (answers.engineerName, answers.engineerID, answers.engineerEmail)
    teamMembers.push(engineer);
    idArray.push(answers.engineerId);
    createTeam ();
})

}
function addIntern(){
inquirer.prompt([
{
    type:"input",
    name: "EmployeeName",
    message: "Please enter the First and Last Name."
},
{
    type:"input",
    name: "EmployeeID",
    message: "Please enter the six digit Employee ID number."
},
{
    type:"Input",
    name: "Email",
    message: "What is the Employee Email Address?"
}, 
{
    type:"Input",
    name: "School",
    message: "What is the Intern's School Name?"
},                   
{
    type:"Choice",
    name: ["Yes", "No"],
    message: "Would You Like to Add Another Member?"
},         
])
.then(answers => {
const intern = new Intern (answers.internName, answers.internId, answers.internEmail, answers.internSchool)
teamMembers.push(intern);
idArray.push(answers.internId);
createTeam ();
});

}

function buildTeam(){
fs.writeFileSync(outputPath, render(teamMembers),"utf-8s");
}

createManager();

}


appTeam();

// After the user has input all employees desired, call the `render` function (required above) and pass in an array containing all employee objects; the `render` function will generate and return a block of HTML including templated div for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML returned from the `render` function. Now write it to a file named `team.html` in the `output` folder. You can use the variable `outputPath` above target this location.


// Hint: you may need to check if the `output` folder exists and create it if it does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different information; write your code to ask different questions via inquirer depending on employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer, and Intern classes should all extend from a class named Employee; see the directions for further information. Be sure to test out each class and verify it generates an object with the correct structure and methods. This structure will be crucial in order for the provided `render` function to work!
