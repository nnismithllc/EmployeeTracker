const Employee = require("./Employee");

class Engineer extends Employee {
constructor (name, id, email, school){ 
super(name, id, email);
this.school = school;
}

getRole () {
    return "Manager";
}
getSchool() {
    return this.office;
}
}

module.exports = Manager;
