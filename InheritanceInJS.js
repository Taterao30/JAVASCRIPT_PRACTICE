class Person {

    constructor(name) {
        this.name = name;
    }
}

class Employee extends Person {

    constructor(name, role) {
        super(name); // Calls Person constructor
        this.role = role;
    }

    display() {
        console.log("Name:", this.name);
        console.log("Role:", this.role);
    }
}

const emp = new Employee("Taterao", "Automation Tester");
emp.display();