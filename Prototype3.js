function Employee(id, name) {
    this.id = id;
    this.name = name;
}

Employee.prototype.display = function () {
    console.log(this.id, this.name);
};

let emp = new Employee(101, "David");

emp.display();