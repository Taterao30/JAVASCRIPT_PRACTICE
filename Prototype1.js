class Employee {
    constructor(eid, ename) {
        this.eid = eid;
        this.ename = ename;
    }
}

Employee.prototype.sal = 50000;

let emp1obj = new Employee(101, "David");
console.log(emp1obj.eid, emp1obj.ename, emp1obj.sal);

let emp2obj = new Employee(102, "John");
console.log(emp2obj.eid, emp2obj.ename, emp2obj.sal);