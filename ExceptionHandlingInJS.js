// Exception Handling in JavaScript
// try, catch, finally, throw
// Complete Single Class with All Important Scenarios
// Useful for QA Automation Engineers

class ExceptionHandlingDemo {

    static run() {

        console.log("========== Exception Handling Demo ==========");

        // =====================================================
        // SCENARIO 1
        // Basic try-catch
        // Error occurs inside try block
        // Control moves to catch block
        // =====================================================

        try {

            let num = 10;

            // Number does not have toUpperCase() method

            console.log(num.toUpperCase());

        }
        catch(error) {

            console.log("SCENARIO 1");

            console.log("Error Handled Successfully");

            console.log(error.message);
        }

        console.log("----------------------------------");


        // =====================================================
        // SCENARIO 2
        // Access Error Name and Error Message
        // =====================================================

        try {

            let num = 100;

            num.toUpperCase();

        }
        catch(error) {

            console.log("SCENARIO 2");

            console.log("Error Name :", error.name);

            console.log("Error Message :", error.message);
        }

        console.log("----------------------------------");


        // =====================================================
        // SCENARIO 3
        // try + finally
        // finally executes even if no error occurs
        // =====================================================

        try {

            console.log("SCENARIO 3");

            console.log("Inside Try Block");

        }
        finally {

            console.log("Inside Finally Block");
        }

        console.log("----------------------------------");


        // =====================================================
        // SCENARIO 4
        // try + catch + finally
        // finally executes after catch
        // =====================================================

        try {

            let age = 10;

            age.toUpperCase();

        }
        catch(error) {

            console.log("SCENARIO 4");

            console.log("Error Occurred");

        }
        finally {

            console.log("Finally Always Executes");
        }

        console.log("----------------------------------");


        // =====================================================
        // SCENARIO 5
        // throw custom exception
        // =====================================================

        try {

            let age = 15;

            if(age < 18)
            {
                throw new Error(
                    "Age should be greater than or equal to 18"
                );
            }

        }
        catch(error) {

            console.log("SCENARIO 5");

            console.log(error.message);
        }

        console.log("----------------------------------");


        // =====================================================
        // SCENARIO 6
        // throw string message
        // =====================================================

        try {

            throw "Custom Validation Failed";

        }
        catch(error) {

            console.log("SCENARIO 6");

            console.log(error);
        }

        console.log("----------------------------------");


        // =====================================================
        // SCENARIO 7
        // Manual Validation using throw
        // =====================================================

        try {

            let actualTitle =
                "Google Search";

            let expectedTitle =
                "Google Home";

            if(actualTitle !== expectedTitle)
            {
                throw new Error(
                    "Title Validation Failed"
                );
            }

        }
        catch(error) {

            console.log("SCENARIO 7");

            console.log(error.message);
        }

        console.log("----------------------------------");


        // =====================================================
        // SCENARIO 8
        // JSON Parse Exception
        // Invalid JSON
        // =====================================================

        try {

            let jsonText =
                '{"name":"John"';

            JSON.parse(jsonText);

        }
        catch(error) {

            console.log("SCENARIO 8");

            console.log(error.name);

            console.log(error.message);
        }

        console.log("----------------------------------");


        // =====================================================
        // SCENARIO 9
        // ReferenceError
        // Variable not declared
        // =====================================================

        try {

            console.log(employeeName);

        }
        catch(error) {

            console.log("SCENARIO 9");

            console.log(error.name);

            console.log(error.message);
        }

        console.log("----------------------------------");


        // =====================================================
        // SCENARIO 10
        // TypeError
        // Wrong method on datatype
        // =====================================================

        try {

            let salary = 50000;

            salary.toUpperCase();

        }
        catch(error) {

            console.log("SCENARIO 10");

            console.log(error.name);

            console.log(error.message);
        }

        console.log("----------------------------------");


        // =====================================================
        // SCENARIO 11
        // Nested try-catch
        // =====================================================

        try {

            try {

                let num = 100;

                num.toUpperCase();

            }
            catch(error) {

                console.log("SCENARIO 11");

                console.log("Inner Catch");

                console.log(error.message);
            }

        }
        catch(error) {

            console.log("Outer Catch");
        }

        console.log("----------------------------------");


        // =====================================================
        // SCENARIO 12
        // Multiple Validations using throw
        // =====================================================

        try {

            let response = {
                status : "FAIL",
                code : 500
            };

            if(response.status !== "SUCCESS")
            {
                throw new Error(
                    "Status Validation Failed"
                );
            }

            if(response.code !== 200)
            {
                throw new Error(
                    "Status Code Validation Failed"
                );
            }

        }
        catch(error) {

            console.log("SCENARIO 12");

            console.log(error.message);
        }

        console.log("----------------------------------");


        // =====================================================
        // SCENARIO 13
        // API Validation Example
        // =====================================================

        try {

            let apiResponse = {
                id : 101,
                name : "John",
                status : "Inactive"
            };

            if(apiResponse.status !== "Active")
            {
                throw new Error(
                    "User is not Active"
                );
            }

        }
        catch(error) {

            console.log("SCENARIO 13");

            console.log(error.message);
        }

        console.log("----------------------------------");


        // =====================================================
        // SCENARIO 14
        // Browser Cleanup Example
        // finally used for cleanup activity
        // =====================================================

        try {

            console.log("SCENARIO 14");

            throw new Error(
                "Login Failed"
            );

        }
        catch(error) {

            console.log(error.message);

        }
        finally {

            console.log(
                "Browser Closed Successfully"
            );
        }

        console.log("----------------------------------");


        // =====================================================
        // SCENARIO 15
        // No Error Case
        // catch skipped
        // finally executes
        // =====================================================

        try {

            console.log("SCENARIO 15");

            console.log("Everything is Fine");

        }
        catch(error) {

            console.log(error.message);

        }
        finally {

            console.log(
                "Finally Executed"
            );
        }

        console.log("----------------------------------");


        // =====================================================
        // SCENARIO 16
        // Custom Login Validation
        // =====================================================

        try {

            let username = "admin";

            let password = "123";

            if(username !== "admin" ||
               password !== "admin123")
            {
                throw new Error(
                    "Invalid Credentials"
                );
            }

            console.log("Login Success");

        }
        catch(error) {

            console.log("SCENARIO 16");

            console.log(error.message);
        }

        console.log("----------------------------------");

        console.log(
            "========== Program Completed =========="
        );
    }
}

ExceptionHandlingDemo.run();