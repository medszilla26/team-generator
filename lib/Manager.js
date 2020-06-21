const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    this.office = office;
    this.role = "Manager";
  }

  getRole() {
    return this.role;
  }
  getOffice() {
    return this.office;
  }
}

module.exports = Manager;
