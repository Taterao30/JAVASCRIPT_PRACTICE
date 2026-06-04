let age = 18;

if(age >= 18)
{
    console.log("Eligible for voting");
}
let username = "admin";
let password = "1234";

//Nested

if(username === "admin")
{
    if(password === "1234")
    {
        console.log("Login Successful");
    }
}

let day = 3;

switch(day)
{
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");
}