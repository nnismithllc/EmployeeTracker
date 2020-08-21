const Employee = require("./Employee");

class Engineer extends Employee {
constructor (name, id, email, github) {
    this.github = github;
}


getRole (){
    return this.github;
}

}

module.exports = Engineer;