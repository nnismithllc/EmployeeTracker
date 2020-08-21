const Employee = require("./Employee");
class Employee {
constructor (name, id, email){
    this.name= name;
    this.id= id;
    this.email= email;
    this.office= office;
}


getOffice () {
return this.office;

}

getName () {
    return this.name;
}

getId () {
    return this.id;
}

getEmail (){
    return this.email;
}

getRole () {
    return "Employee";
}
}

module.exports = Employee;