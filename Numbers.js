// Number Methods in JavaScript
// Complete Single Class for QA Automation Engineers

class NumberMethodsDemo {

    static run() {

        // ==========================================
        // Number Conversion Methods
        // ==========================================

        let age = "30";
        let salary = "25000.567";
        let invalidValue = "ABC";

        // ==========================================
        // 1. parseInt()
        // Converts String to Integer
        // ==========================================

        console.log(
            "parseInt():",
            parseInt(age)
        );

        // Output:
        // 30


        // ==========================================
        // 2. parseFloat()
        // Converts String to Decimal Number
        // ==========================================

        console.log(
            "parseFloat():",
            parseFloat(salary)
        );

        // Output:
        // 25000.567


        // ==========================================
        // 3. Number()
        // Converts value to Number
        // ==========================================

        console.log(
            "Number():",
            Number("500")
        );

        // Output:
        // 500


        // ==========================================
        // 4. isNaN()
        // Checks whether value is NOT a Number
        // ==========================================

        console.log(
            "isNaN('ABC'):",
            isNaN(invalidValue)
        );

        // Output:
        // true

        console.log(
            "isNaN('100'):",
            isNaN("100")
        );

        // Output:
        // false


        // ==========================================
        // Number Object Methods
        // ==========================================

        let amount = 12345.6789;
        let num = 100;

        // ==========================================
        // 5. toFixed()
        // Controls decimal places
        // ==========================================

        console.log(
            "toFixed(2):",
            amount.toFixed(2)
        );

        // Output:
        // 12345.68


        // ==========================================
        // 6. toString()
        // Converts Number to String
        // ==========================================

        console.log(
            "toString():",
            num.toString()
        );

        // Output:
        // "100"


        // ==========================================
        // 7. valueOf()
        // Returns primitive number value
        // ==========================================

        let objNum = new Number(500);

        console.log(
            "valueOf():",
            objNum.valueOf()
        );

        // Output:
        // 500


        // ==========================================
        // 8. Number.isInteger()
        // Checks integer or not
        // ==========================================

        console.log(
            "Number.isInteger(10):",
            Number.isInteger(10)
        );

        // Output:
        // true

        console.log(
            "Number.isInteger(10.5):",
            Number.isInteger(10.5)
        );

        // Output:
        // false


        // ==========================================
        // 9. Number.isFinite()
        // Checks finite number
        // ==========================================

        console.log(
            "Number.isFinite(100):",
            Number.isFinite(100)
        );

        // Output:
        // true


        // ==========================================
        // Math Methods
        // ==========================================

        // ==========================================
        // 10. Math.round()
        // Nearest whole number
        // ==========================================

        console.log(
            "Math.round(4.6):",
            Math.round(4.6)
        );

        // Output:
        // 5


        // ==========================================
        // 11. Math.ceil()
        // Always rounds UP
        // ==========================================

        console.log(
            "Math.ceil(4.1):",
            Math.ceil(4.1)
        );

        // Output:
        // 5


        // ==========================================
        // 12. Math.floor()
        // Always rounds DOWN
        // ==========================================

        console.log(
            "Math.floor(4.9):",
            Math.floor(4.9)
        );

        // Output:
        // 4


        // ==========================================
        // 13. Math.max()
        // Returns highest value
        // ==========================================

        console.log(
            "Math.max():",
            Math.max(10, 20, 30, 40)
        );

        // Output:
        // 40


        // ==========================================
        // 14. Math.min()
        // Returns smallest value
        // ==========================================

        console.log(
            "Math.min():",
            Math.min(10, 20, 30, 40)
        );

        // Output:
        // 10


        // ==========================================
        // 15. Math.random()
        // Generates random value between 0 and 1
        // ==========================================

        console.log(
            "Math.random():",
            Math.random()
        );

        // Output:
        // Random value like 0.5678


        // ==========================================
        // 16. Math.abs()
        // Returns positive value
        // ==========================================

        console.log(
            "Math.abs(-50):",
            Math.abs(-50)
        );

        // Output:
        // 50


        // ==========================================
        // 17. Math.pow()
        // Power calculation
        // ==========================================

        console.log(
            "Math.pow(2,3):",
            Math.pow(2, 3)
        );

        // Output:
        // 8


        // ==========================================
        // 18. Math.sqrt()
        // Square root
        // ==========================================

        console.log(
            "Math.sqrt(64):",
            Math.sqrt(64)
        );

        // Output:
        // 8


        // ==========================================
        // 19. Math.trunc()
        // Removes decimal portion
        // ==========================================

        console.log(
            "Math.trunc(10.99):",
            Math.trunc(10.99)
        );

        // Output:
        // 10


        // ==========================================
        // 20. Math.cbrt()
        // Cube root
        // ==========================================

        console.log(
            "Math.cbrt(27):",
            Math.cbrt(27)
        );

        // Output:
        // 3


        // ==========================================
        // Real-Time QA Example
        // ==========================================

        let apiResponse = {
            age: "30",
            salary: "25000.567"
        };

        let actualAge = parseInt(apiResponse.age);

        let actualSalary =
            parseFloat(apiResponse.salary);

        console.log(
            "Actual Age:",
            actualAge
        );

        console.log(
            "Actual Salary:",
            actualSalary.toFixed(2)
        );

        if(actualAge === 30)
        {
            console.log("Age Validation Passed");
        }

        if(actualSalary > 25000)
        {
            console.log("Salary Validation Passed");
        }
    }
}

NumberMethodsDemo.run();

//Monst important methods for QA Automation Engineers are covered in this class. You can run this code in any JavaScript environment to see the output and understand how these number methods work.

// parseInt()
// parseFloat()
// Number()
// isNaN()

// toFixed()
// toString()

// Number.isInteger()
// Number.isFinite()

// Math.round()
// Math.ceil()
// Math.floor()
// Math.max()
// Math.min()
// Math.random()
// Math.abs()
// Math.pow()
// Math.sqrt()
// Math.trunc()