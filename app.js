// Variables Information
const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Output Information
const outputPath = path.resolve(__dirname, "output", "team.html");
const render = require("./Develop/lib/htmlRenderer");

// Port Details
var PORT = 3000;

// Team Member Variable ID for Render Capture
const teamMembers = [];
const ids = [];

// App Function Details
function appTeam() {
  // Manager Function with Questions
  function createManager() {
    inquirer.prompt([
    {
      type: "list",
      name: "managerOff",
      message: "What is the Location Office Number?",
      choices: ["102938", "928374", "857463"],
    },
    {
      type: "input",
      name: "managerName",
      message: "Please enter the Manager's First and Last name.",
    },
    {
      type: "input",
      name: "managerId",
      message: "Please input Manager's ID number.",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "Please enter Manager's company email address.",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the office Phone Number?",
    },
  ])

  // Capture of Answers for Manager Input
  .then((answers) => {
    const manager = new Manager(
      answers.managerName,
      answers.managerId,
      answers.managerEmail,
      answers.officeNumber
    );
      teamMembers.push(manager);
      ids.push(answers.managerId);
      createTeam();
  });
  }

// Function Create Manager Details
  function createTeam() {
    inquirer.prompt([
  {
      type: "list",
      name: "memberChoice",
      message: "What Type of Member do you want to add?",
      choices: ["Engineer", "Intern", "I'm finished"],
  },
])

// Switch Selector for Questions and Answers
    .then((uSelection) => {
      switch (uSelection.memberChoice) {
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
          buildTeam();
      }
});
}

// Function for Engineer with Questions
  function addEngineer() {
    inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "Please enter this Engineer's First and Last name.",
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

// Capture of Answers for Engineer Input
])
    .then((answers) => {
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.github
      );
      teamMembers.push(engineer);
      ids.push(answers.engineerId);
      createTeam();
    });
}

// Function for Intern Information
  function addIntern() {
    inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "Please enter the Intern's First and Last Name.",
    },
    {
      type: "input",
      name: "internId",
      message: "Please enter the Intern's ID number.",
    },

    {
      type: "input",
      name: "internEmail",
      message: "Please enter the Intern contact email.",
    },
    {
      type: "input",
      name: "internSchool",
      message: "What School does this Intern attend?",
    },
])

// Capture of Answers for Input Input
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        teamMembers.push(intern);
        ids.push(answers.internId);

// Initialize Team from Input        
      createTeam();
  });
  }

// Function to Build Team on 1 Page - Output
  function buildTeam() {
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  }

// Initialize Manager
createManager();
}

// Begin App Function 
appTeam();
