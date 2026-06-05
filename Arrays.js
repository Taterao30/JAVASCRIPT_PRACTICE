// ===============================
// ARRAYS IN JAVASCRIPT
// ===============================

console.log("===== CREATE ARRAY =====");

let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits);


// ===============================
// ACCESS ELEMENTS
// ===============================

console.log("\n===== ACCESS ELEMENTS =====");

console.log("First Fruit : " + fruits[0]);
console.log("Second Fruit : " + fruits[1]);
console.log("Third Fruit : " + fruits[2]);


// ===============================
// LENGTH
// ===============================

console.log("\n===== ARRAY LENGTH =====");

console.log(fruits.length);


// ===============================
// UPDATE ELEMENT
// ===============================

console.log("\n===== UPDATE ELEMENT =====");

fruits[1] = "Orange";

console.log(fruits);


// ===============================
// PUSH (ADD AT END)
// ===============================

console.log("\n===== PUSH =====");

fruits.push("Grapes");

console.log(fruits);


// ===============================
// POP (REMOVE LAST)
// ===============================

console.log("\n===== POP =====");

fruits.pop();

console.log(fruits);


// ===============================
// UNSHIFT (ADD AT START)
// ===============================

console.log("\n===== UNSHIFT =====");

fruits.unshift("Pineapple");

console.log(fruits);


// ===============================
// SHIFT (REMOVE FIRST)
// ===============================

console.log("\n===== SHIFT =====");

fruits.shift();

console.log(fruits);


// ===============================
// INCLUDES
// ===============================

console.log("\n===== INCLUDES =====");

console.log(fruits.includes("Apple"));
console.log(fruits.includes("Watermelon"));


// ===============================
// INDEX OF
// ===============================

console.log("\n===== INDEX OF =====");

console.log(fruits.indexOf("Banana"));


// ===============================
// FOR LOOP
// ===============================

console.log("\n===== FOR LOOP =====");

for(let i = 0; i < fruits.length; i++)
{
    console.log(fruits[i]);
}


// ===============================
// FOR OF LOOP
// ===============================

console.log("\n===== FOR OF LOOP =====");

for(let fruit of fruits)
{
    console.log(fruit);
}


// ===============================
// NUMBER ARRAY
// ===============================

console.log("\n===== NUMBER ARRAY =====");

let numbers = [10,20,30,40,50];

console.log(numbers);


// ===============================
// SUM OF ARRAY
// ===============================

console.log("\n===== SUM OF ARRAY =====");

let sum = 0;

for(let num of numbers)
{
    sum = sum + num;
}

console.log("Sum = " + sum);


// ===============================
// EVEN NUMBERS
// ===============================

console.log("\n===== EVEN NUMBERS =====");

for(let num of numbers)
{
    if(num % 2 === 0)
    {
        console.log(num);
    }
}


// ===============================
// REVERSE
// ===============================

console.log("\n===== REVERSE =====");

numbers.reverse();

console.log(numbers);


// ===============================
// SORT
// ===============================

console.log("\n===== SORT =====");

let values = [30,10,50,20];

values.sort((a,b)=>a-b);

console.log(values);


// ===============================
// MAP
// ===============================

console.log("\n===== MAP =====");

let result1 = numbers.map(num => num * 10);

console.log(result1);


// ===============================
// FILTER
// ===============================

console.log("\n===== FILTER =====");

let result2 = numbers.filter(num => num > 20);

console.log(result2);


// ===============================
// FIND
// ===============================

console.log("\n===== FIND =====");

let result3 = numbers.find(num => num > 30);

console.log(result3);


// ===============================
// ARRAY OF OBJECTS
// ===============================

console.log("\n===== ARRAY OF OBJECTS =====");

let employees =
[
    {
        id: 101,
        name: "Taterao",
        role: "QA Engineer"
    },
    {
        id: 102,
        name: "Rahul",
        role: "Developer"
    }
];

console.log(employees);


// ===============================
// ACCESS OBJECT INSIDE ARRAY
// ===============================

console.log("\n===== ACCESS OBJECT =====");

console.log(employees[0].name);
console.log(employees[1].role);


// ===============================
// LOOP ARRAY OF OBJECTS
// ===============================

console.log("\n===== LOOP ARRAY OF OBJECTS =====");

for(let emp of employees)
{
    console.log(emp.id);
    console.log(emp.name);
    console.log(emp.role);
}


// ===============================
// MULTI DIMENSIONAL ARRAY
// ===============================

console.log("\n===== MULTI DIMENSIONAL ARRAY =====");

let matrix =
[
    [10,20],
    [30,40]
];

console.log(matrix[0][0]);
console.log(matrix[0][1]);
console.log(matrix[1][0]);
console.log(matrix[1][1]);


// ===============================
// API RESPONSE EXAMPLE
// ===============================

console.log("\n===== API RESPONSE =====");

let response =
{
    ids: [101,102,103,104]
};

console.log(response.ids);

for(let id of response.ids)
{
    console.log(id);
}