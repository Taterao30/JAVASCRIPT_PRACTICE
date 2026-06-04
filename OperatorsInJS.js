class JavaScriptOperatorsDemo {
    
    demonstrateOperators() {

        // 1. Arithmetic Operators
        let a = 10;
        let b = 3;

        console.log("=== Arithmetic Operators ===");
        console.log("Addition:", a + b);
        console.log("Subtraction:", a - b);
        console.log("Multiplication:", a * b);
        console.log("Division:", a / b);
        console.log("Modulus:", a % b);
        console.log("Exponentiation:", a ** b);

        // 2. Assignment Operators
        let x = 10;

        console.log("\n=== Assignment Operators ===");
        x += 5;
        console.log("x += 5 :", x);

        x -= 3;
        console.log("x -= 3 :", x);

        x *= 2;
        console.log("x *= 2 :", x);

        x /= 4;
        console.log("x /= 4 :", x);

        // 3. Comparison Operators
        console.log("\n=== Comparison Operators ===");
        console.log("10 == '10' :", 10 == "10");
        console.log("10 === '10' :", 10 === "10");
        console.log("10 != 5 :", 10 != 5);
        console.log("10 !== '10' :", 10 !== "10");
        console.log("10 > 5 :", 10 > 5);
        console.log("10 < 5 :", 10 < 5);
        console.log("10 >= 10 :", 10 >= 10);
        console.log("10 <= 5 :", 10 <= 5);

        // 4. Logical Operators
        let age = 25;
        let citizen = true;

        console.log("\n=== Logical Operators ===");
        console.log("AND (&&):", age >= 18 && citizen);
        console.log("OR (||):", age < 18 || citizen);
        console.log("NOT (!):", !citizen);

        // 5. Increment & Decrement
        let num = 5;

        console.log("\n=== Increment & Decrement ===");
        console.log("Post Increment:", num++);
        console.log("After Post Increment:", num);

        console.log("Pre Increment:", ++num);

        console.log("Post Decrement:", num--);
        console.log("After Post Decrement:", num);

        console.log("Pre Decrement:", --num);

        // 6. Ternary Operator
        console.log("\n=== Ternary Operator ===");
        let result = age >= 18 ? "Eligible" : "Not Eligible";
        console.log(result);

        // 7. Typeof Operator
        console.log("\n=== Typeof Operator ===");
        console.log(typeof "Taterao");
        console.log(typeof 100);
        console.log(typeof true);

        // 8. Nullish Coalescing Operator
        console.log("\n=== Nullish Coalescing (??) ===");
        let userName = null;
        console.log(userName ?? "Guest");

        // 9. Optional Chaining
        console.log("\n=== Optional Chaining (?.) ===");
        let employee = {};
        console.log(employee.address?.city);

        // 10. Spread Operator
        console.log("\n=== Spread Operator (...) ===");
        let arr1 = [1, 2, 3];
        let arr2 = [...arr1, 4, 5];
        console.log(arr2);
    }
}

// Create Object
const obj = new JavaScriptOperatorsDemo();

// Call Method
obj.demonstrateOperators();