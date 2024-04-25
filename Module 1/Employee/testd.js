class EmployeeManager {
    constructor(){
        this.employees = []
   }

   addEmployee(name,position){
        const exitEm = this.employees.find(em => em.name === name && em.position === position)
        if(exitEm ){
            return null
        }
       
        const uniqId = this.employees.length + 1
          const newEm = ({
                id:uniqId, 
                name:name,
                position:position
            })
        this.employees.push(newEm)
        return newEm
   }

   removeEmployee(id){
    const removeId = this.employees.findIndex(emId => emId.id === id)
        if(removeId === -1){
            return false
        }
        this.employees.splice(removeId,1)
        return true
   }

   findEmployeeByName(name){
    return this.employees.filter((findName) => findName.name.toLowerCase() === name.toLowerCase())
    
   }

   sortEmployeeByName(){
      return  this.employees.sort((a, b) => a.name.localeCompare(b.name))
   }

   updateEmployee(employee){
    const update = this.employees.findIndex(emp => emp.id === employee.id)
        if (update !== -1) {
            this.employees[update] = employee
        }
   }

   promoteEmployee(id,newPosition){
    const employee = this.employees.find(promo => promo.id === id)
    if (employee) {
        employee.position = newPosition
        return true
    }
    return false
   }
}
 
// Example usage:
const manager = new EmployeeManager();
console.log(manager.addEmployee("John Doe", "Developer")); // Adds and logs new employee
console.log(manager.addEmployee("Jane Doe", "Designer")); // Adds and logs new employee
console.log(manager.findEmployeeByName("John Doe")); // Finds and logs John Doe
manager.sortEmployeeByName(); // Sorts employees by name
console.log(manager.employees); // Logs sorted employees
manager.promoteEmployee(1, "Senior Developer"); // Promotes John Doe to Senior Developer
console.log(manager.employees); // Logs employees to see the updated position of John Doe
