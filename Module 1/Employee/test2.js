class EmployeeManager {
    constructor(){
        this.employees = [];
    }   

    addEmployee(name, position){
        const existEmployee = this.employees.find(emp => emp.name.toLowerCase() === name.toLowerCase());
        if(existEmployee){
            return null;
        }
        const id = this.generateId();
        const newEmployee = { id, name, position };
        this.employees.push(newEmployee);
        return newEmployee;
    }

    removeEmployee(id){
        const searchIdRemove = this.employees.findIndex(emp => emp.id === id);
        if(searchIdRemove === -1){
            return false; // Return false if employee with given id is not found
        }
        this.employees.splice(searchIdRemove, 1);
        return true;
    }

    findEmployeeByName(name){
        const matchingEmployees = this.employees.filter(emp => emp.name.toLowerCase() === name.toLowerCase());
        return matchingEmployees;
    }

    sortEmployeeByName(){
        this.employees.sort((a, b) => a.name.localeCompare(b.name));
    }

    updateEmployee(id, updatedEmployee){
        const indexToUpdate = this.employees.findIndex(emp => emp.id === id);
        if (indexToUpdate === -1){
            return false; // Employee with given id not found
        }
        this.employees[indexToUpdate] = updatedEmployee; // Update the employee object
        return true;
    }

    promoteEmployee(id, newPosition){
        const promotedEmployee = this.employees.find(emp => emp.id === id);
        if (!promotedEmployee){
            return false; // Employee with given id not found
        }
        promotedEmployee.position = newPosition; // Update the position
        return true;
    }

    generateId(){
        const existingIds = this.employees.map(emp => emp.id);
        let newId;
        do {
            newId = Math.floor(Math.random() * 1000) + 1; // Generate random id between 1 and 1000
        } while (existingIds.includes(newId));

        return newId;
    }
}
const manager = new EmployeeManager();
console.log(manager.addEmployee("John Doe", "Developer")); // Adds and logs new employee
console.log(manager.addEmployee("Jane Doe", "Designer")); // Adds and logs new employee
console.log(manager.findEmployeeByName("John Doe")); // Finds and logs John Doe
manager.sortEmployeeByName(); // Sorts employees by name
console.log(manager.employees); // Logs sorted employees
manager.promoteEmployee(1, "Senior Developer"); // Promotes John Doe to Senior Developer
console.log(manager.employees); // Logs employees to see the updated position of John Doe
