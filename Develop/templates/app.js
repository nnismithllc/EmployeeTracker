const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Choice = require("inquirer/lib/objects/choice");


// Write code to use inquirer to gather information about the development team members,
const teamMembers =[];
const idArray = [];

function addTeam(){

function createTeam(){
    inquirer.prompt([
        {
            type:"choice",
            name: ["Manager", "Engineer", "Employee", "Intern"],
            message: "What Type of Member do You want to add?"
        }

        
        ]).then(uSelection =>{
         switch(uSelection.uChoice) {
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
         }


        }



        )
    }

function createManager() {
inquirer.prompt([
{
    type:"Choice",
    name: ["Yes", "No"],
    message: "Are you the Manager?"
},
{
    type:"Input",
    name: "Manager",
    message: "What is Your Name?"
},
{
    type:"Input",
    name: "Office Number",
    message: "What is Your Office Branch Number?"
},
{
    type:"Input",
    name: "EmployeeID",
    message: "What is Your Employee ID Number?"
},
{
    type:"Input",
    name: "Email",
    message: "What is Your Employee Email Address?"
},
{
    type:"Input",
    name: "Employee",
    message: "Please add a member to your team."
}  

])
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
    type:"Choice",
    name: ["Yes", "No"],
    message: "Would You Like to Add Another Member?"
},         
// Need and If Then Statement
{
    type:"choice",
    name: ["Engineer","Employee", "Intern","Manager"],
    message: "What is the Employment Title?"
}
])

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
    type:"Input",
    name: "Email",
    message: "What is the Employee Email Address?"
}, 
{
    type:"Input",
    name: "GitHub",
    message: "What is the Employee GitHub Username?"
},                   
{
    type:"Choice",
    name: ["Yes", "No"],
    message: "Would You Like to Add Another Member?"
},         
])

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


function buildTeam(){
fs.writeFileSync(outputPath, render(teamMembers),"utf-8S")
}

createManager();{

}

createEngineer();{

}


addTeam();

// After the user has input all employees desired, call the `render` function (required



// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! 
