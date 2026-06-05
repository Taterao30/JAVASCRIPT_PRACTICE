// String Methods in JavaScript
// Complete Single Class for QA Automation Engineers

class StringMethodsDemo {

    static run() {

        let text = "  JavaScript Automation Testing  ";

        // ==========================================
        // 1. length
        // Returns total number of characters
        // ==========================================

        console.log("length:", text.length);

        // Output:
        // 32


        // ==========================================
        // 2. charAt()
        // Returns character at specified index
        // ==========================================

        console.log("charAt(2):", text.charAt(2));

        // Output:
        // J


        // ==========================================
        // 3. toUpperCase()
        // Converts all characters to uppercase
        // ==========================================

        console.log("toUpperCase():", text.toUpperCase());

        // Output:
        // JAVASCRIPT AUTOMATION TESTING


        // ==========================================
        // 4. toLowerCase()
        // Converts all characters to lowercase
        // ==========================================

        console.log("toLowerCase():", text.toLowerCase());

        // Output:
        // javascript automation testing


        // ==========================================
        // 5. trim()
        // Removes spaces from beginning and end
        // ==========================================

        console.log("trim():", text.trim());

        // Output:
        // JavaScript Automation Testing


        // ==========================================
        // 6. includes()
        // Checks whether text exists
        // Returns true or false
        // ==========================================

        console.log(
            "includes('Automation'):",
            text.includes("Automation")
        );

        // Output:
        // true


        // ==========================================
        // 7. startsWith()
        // Checks starting characters
        // ==========================================

        let str1 = "Login Successful";

        console.log(
            "startsWith():",
            str1.startsWith("Login")
        );

        // Output:
        // true


        // ==========================================
        // 8. endsWith()
        // Checks ending characters
        // ==========================================

        console.log(
            "endsWith():",
            str1.endsWith("Successful")
        );

        // Output:
        // true


        // ==========================================
        // 9. indexOf()
        // Returns first occurrence position
        // ==========================================

        let str2 = "Automation Testing";

        console.log(
            "indexOf('Testing'):",
            str2.indexOf("Testing")
        );

        // Output:
        // 11


        // ==========================================
        // 10. lastIndexOf()
        // Returns last occurrence position
        // ==========================================

        let str3 = "QA QA QA";

        console.log(
            "lastIndexOf('QA'):",
            str3.lastIndexOf("QA")
        );

        // Output:
        // 6


        // ==========================================
        // 11. replace()
        // Replaces first occurrence only
        // ==========================================

        let str4 = "Java Selenium";

        console.log(
            "replace():",
            str4.replace("Java", "JavaScript")
        );

        // Output:
        // JavaScript Selenium


        // ==========================================
        // 12. replaceAll()
        // Replaces all occurrences
        // ==========================================

        let str5 = "QA QA QA";

        console.log(
            "replaceAll():",
            str5.replaceAll("QA", "Automation")
        );

        // Output:
        // Automation Automation Automation


        // ==========================================
        // 13. substring()
        // Extracts characters between indexes
        // End index excluded
        // ==========================================

        let str6 = "JavaScript";

        console.log(
            "substring(0,4):",
            str6.substring(0,4)
        );

        // Output:
        // Java


        // ==========================================
        // 14. slice()
        // Extracts portion of string
        // ==========================================

        console.log(
            "slice(4):",
            str6.slice(4)
        );

        // Output:
        // Script


        // ==========================================
        // 15. split()
        // Converts string into array
        // ==========================================

        let users = "John,Mike,Sam";

        console.log(
            "split():",
            users.split(",")
        );

        // Output:
        // ["John","Mike","Sam"]


        // ==========================================
        // 16. concat()
        // Joins multiple strings
        // ==========================================

        let firstName = "Taterao";
        let lastName = "Gaikwad";

        console.log(
            "concat():",
            firstName.concat(" ", lastName)
        );

        // Output:
        // Taterao Gaikwad


        // ==========================================
        // 17. repeat()
        // Repeats string multiple times
        // ==========================================

        console.log(
            "repeat():",
            "QA ".repeat(3)
        );

        // Output:
        // QA QA QA


        // ==========================================
        // 18. padStart()
        // Adds characters at beginning
        // ==========================================

        let num1 = "5";

        console.log(
            "padStart():",
            num1.padStart(3, "0")
        );

        // Output:
        // 005


        // ==========================================
        // 19. padEnd()
        // Adds characters at end
        // ==========================================

        console.log(
            "padEnd():",
            num1.padEnd(3, "0")
        );

        // Output:
        // 500


        // ==========================================
        // 20. search()
        // Searches text and returns position
        // ==========================================

        console.log(
            "search():",
            str2.search("Testing")
        );

        // Output:
        // 11


        // ==========================================
        // 21. match()
        // Returns matching value
        // ==========================================

        let str7 = "JavaScript";

        console.log(
            "match():",
            str7.match("Script")
        );

        // Output:
        // ["Script"]


        // ==========================================
        // 22. valueOf()
        // Returns primitive string value
        // ==========================================

        let str8 = new String("QA");

        console.log(
            "valueOf():",
            str8.valueOf()
        );

        // Output:
        // QA


        // ==========================================
        // 23. Template Literals
        // Modern string concatenation
        // ==========================================

        let name = "Taterao";
        let role = "QA Engineer";

        console.log(
            `My name is ${name} and I am ${role}`
        );

        // Output:
        // My name is Taterao and I am QA Engineer


        // ==========================================
        // Real-Time QA Example
        // ==========================================

        let response = {
            userName: "  Taterao  ",
            status: "success"
        };

        let userName = response.userName.trim();

        let status = response.status.toUpperCase();

        console.log("User Name:", userName);

        console.log("Status:", status);

        if(status === "SUCCESS")
        {
            console.log("Validation Passed");
        }
    }
}

StringMethodsDemo.run();