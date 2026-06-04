let fruits = ["Apple", "Mango", "Banana"];


for(const fruit of fruits)
{
    console.log(fruit);
}

console.log("========================");
let employee =
{
    name: "Taterao",
    role: "QA Engineer",
    city: "Mumbai"
};


console.log(employee.name);

for(let key in employee)
{
    console.log(key + " : " + employee[key]);
}
console.log("========================");
let numbers = [10, 20, 30, 40, 50];

for(let num of numbers)
{
    console.log(num);
}

console.log("========================");

let numbersValue = [10, 20, 30, 40, 50];

for(let i = 0; i < numbersValue.length; i++)
{
    console.log(i + " : " + numbersValue[i]);
}