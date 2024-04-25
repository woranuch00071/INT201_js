class EmployeeManager {
 
    static id = 1
 
    constructor(){
        this.employees = []
 
        this.id = EmployeeManager.id++;
 
        // EmployeeManager.id = 1;
 
 
    }
 
//Adds a new employee to the employees array. Generate a unique id for
// each employee.
 
    addEmployee(name, position){
        //Return object of new employee or null if the employee exist
        const employeeHave = this.employees.find(emp => emp.name.toLowerCase() === name.toLowerCase())
        if(employeeHave){
            return null
        }
 
 
        //static id
        // const id = EmployeeManager.id++ // Using static variable id ต้องเป็น id++ ไม่งั้นจะเป็นเลข1 อย่างเดียว เพราะกำหนดเริ่มต้นที่ 1
        const newEmployee = {id,name,position} //สร้าง new object
        this.employees.push(newEmployee) //push ข้อมูลเข้า employees
        return newEmployee
    }
 
 
 
    removeEmployee(id){
 
        const employeeRemove = this.employees.findIndex(emp => emp.id === id)
 
        if(employeeRemove === -1){ //หาไม่เจอ remove ไม่ได้
            return false
        }
 
        this.employees.splice(employeeRemove,1) // remove สำเร็จ 1 คือลบออก
        return true
    }
 
 
 
    findEmployeeByName(name){
        const employeeFindName = this.employees.find(emp => emp.name.toLowerCase() === name.toLowerCase()) //ที่มีอยู่เท่ากับที่รับมา
        return employeeFindName
    }
 
 
 
    sortEmployeeByName(){
 
        this.employees.sort((a,b) =>a.name.localeCompare(b.name))
 
 
    }
 
 
    //Update employee by employee id.
    updateEmployee (employee){
        const employeeUpdateId = this.employees.findIndex(emp => emp.id === employee.id ) //ที่รับมาเท่ากับที่มีอยู่
 
        if(employeeUpdateId === -1){
            return false               //ถ้าไม่เจอ
        }
 
        this.employees[employeeUpdateId] = employee
        return true     //อัพเดทเรียบร้อยแล้วใส่ใน employees
    }
 
 
    promoteEmployee(id, newPosition){
 
        const employeePromote = this.employees.find(emp => emp.id === id) //id เพื่อเรียกใช้
 
        if(!employeePromote){
            return false        //ถ้าไม่เจอ
        }
 
        employeePromote.position = newPosition
        return true                            //เลื่อนตำแหน่งได้แล้ว
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