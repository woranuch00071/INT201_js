class EmployeeManager {
    constructor() {
      this.employees = [];
    }
  
    addEmployee(name, position) {
      const existingEmployee = this.employees.find(emp => emp.name.toLowerCase() === name.toLowerCase());
      if (existingEmployee) {
        return null; // Employee already exists
      }
  
      const id = this.generateUniqueId();
      const newEmployee = { id, name, position };
      this.employees.push(newEmployee);
      return newEmployee;
    }
  
    removeEmployee(id) {
      const indexToRemove = this.employees.findIndex(emp => emp.id === id);
      if (indexToRemove === -1) {
        return false; // Employee doesn't exist
      }
  
      this.employees.splice(indexToRemove, 1);
      return true;
    }
  
    findEmployeeByName(name) {
      const matchingEmployees = this.employees.filter(emp => emp.name.toLowerCase() === name.toLowerCase());
      return matchingEmployees;
    }
  
    sortEmployeeByName() {
      this.employees.sort((a, b) => a.name.localeCompare(b.name));
    }
  
    updateEmployee(employee) {
      const indexToUpdate = this.employees.findIndex(emp => emp.id === employee.id);
      if (indexToUpdate === -1) {
        return false; // Employee doesn't exist
      }
  
      this.employees[indexToUpdate] = employee;
      return true;
    }
  
    generateUniqueId() {
      const existingIds = this.employees.map(emp => emp.id);
      let newId;
      do {
        newId = Math.floor(Math.random() * 1000) + 1; // Generate random id between 1 and 1000
      } while (existingIds.includes(newId));
  
      return newId;
    }
  
    promoteEmployee(id, newPosition) {
      const employeeToPromote = this.employees.find(emp => emp.id === id);
      if (!employeeToPromote) {
        return false; // Employee not found
      }
  
      employeeToPromote.position = newPosition;
      console.log(`Employee ${employeeToPromote.name} promoted to ${newPosition}`);
      return true;
    }
  }
  
  // Example usage:
  const empManager = new EmployeeManager();
  empManager.addEmployee("John Doe", "Developer");
  empManager.addEmployee("Jane Smith", "Manager");
  empManager.addEmployee("Mike Johnson", "Analyst");
  
  console.log(empManager.employees); // Initial employee list
  
  empManager.sortEmployeeByName();
  console.log(empManager.employees); // Sorted by name
  
  empManager.promoteEmployee(1, "Senior Developer"); // Assuming ID 1 belongs to John Doe
  console.log(empManager.findEmployeeByName("John Doe")); // Finding John Doe
  
  empManager.removeEmployee(2); // Removing Jane Smith
  console.log(empManager.employees); // Employee list after removal
  