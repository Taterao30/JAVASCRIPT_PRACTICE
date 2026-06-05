class Employee {
    #salary;

    constructor(name, salary) {
        this.name = name;
        this.#salary = salary;
    }

    getSalary() {
        return this.#salary;
    }

    setSalary(newSalary) {
        if (newSalary > 0) {
            this.#salary = newSalary;
        } else {
            console.log("Invalid Salary");
        }
    }

    display() {
        console.log(`Name: ${this.name}`);
        console.log(`Salary: ${this.#salary}`);
    }
}

const emp = new Employee("Taterao", 50000);

emp.display();

emp.setSalary(70000);

console.log(emp.getSalary());

// Not allowed
// console.log(emp.#salary);