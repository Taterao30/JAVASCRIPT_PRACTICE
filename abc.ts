class Employee {

    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const emp = new Employee("Taterao", 101);

console.log(emp.name);
console.log(emp.id);