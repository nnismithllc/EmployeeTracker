const Employee = require("./Employee");

class Engineer extends Employee {
constructor (name, id, email, github, githubUser){
super(name, id, email);
    this.github = github;
    this.githubUser = githubUser;
}



getRole () {
    return "Engineer";
}

getGitHub () {
    return this.github;
}

getGitHubUser () {
    return this.githubUser;
}
}

module.exports = Engineer;