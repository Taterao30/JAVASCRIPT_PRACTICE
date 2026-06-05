class Employee {

    // Static Variable
    static companyName = "Google";

    // Constructor
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    // Non-Static Method
    displayEmployee() {
        console.log("Employee Name:", this.name);
        console.log("Employee ID:", this.id);
    }

    // Static Method
    static displayCompany() {
        console.log("Company Name:", Employee.companyName);
    }
}

// Access Static Variable
console.log(Employee.companyName);

// Access Static Method
Employee.displayCompany();

// Create Object
const emp1 = new Employee("Taterao", 101);

// Access Non-Static Variables
console.log(emp1.name);
console.log(emp1.id);

// Access Non-Static Method
emp1.displayEmployee();