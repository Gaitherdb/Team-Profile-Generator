const Employee = require("./lib/Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officerNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officerNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;


