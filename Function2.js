//Function for playwright
//1)Normal Function

function add(a,b)
{
    return a+b;
}
let sum = add(10,20);
console.log("Sum:", sum);

//2)Function with arrow function

let multiply = (x,y) => x*y;
let product = multiply(5,10);
console.log("Product:", product);  

console.log("========================");

const addValues = (a,b) =>
{
    return a+b;
};

console.log(addValues(10,20));

console.log("========================");

function isAdult(age)
{
    return age >= 18;
}

console.log(isAdult(20));

console.log("========================");

function getEmployee()
{
    return {
        name: "Taterao",
        role: "QA Engineer"
    };
}

let emp = getEmployee();

console.log(emp.role);

console.log("========================");


function getIds()
{
    return [101,102,103];
}

let ids = getIds();

console.log(ids[0]);

console.log("========================");

//Nested Function

function add(a,b)
{
    return a+b;
}

function multiplyValues(x)
{
    return x*2;
}

let result = multiplyValues(add(10,20));

console.log(result);

console.log("========================");

//Default Parameters
function greet(name = "Guest")
{
    console.log(name);
}

greet();

console.log("========================");

//API Testing example

function getRole(response)
{
    return response.role;
}

let response =
{
    name: "Taterao",
    role: "QA Engineer"
};

console.log(getRole(response));
