class CallbackAutomationExamples {

    // =====================================================
    // UI SCENARIO 1
    // Login Button Click
    // After button click perform validation
    // =====================================================
    loginButtonClick(callback) {

        console.log("Login Button Clicked");

        callback();
    }

    // =====================================================
    // UI SCENARIO 2
    // Enter Username then perform next action
    // =====================================================
    enterUsername(username, callback) {

        console.log("Username Entered :", username);

        callback();
    }

    // =====================================================
    // UI SCENARIO 3
    // Page Loaded Successfully
    // =====================================================
    pageLoad(callback) {

        console.log("Page Loaded");

        callback();
    }

    // =====================================================
    // UI SCENARIO 4
    // Form Submission
    // =====================================================
    submitForm(callback) {

        console.log("Form Submitted");

        callback();
    }

    // =====================================================
    // API SCENARIO 1
    // Hit API and validate response
    // =====================================================
    getUsers(callback) {

        console.log("Sending API Request...");

        setTimeout(() => {

            let response = {
                status: 200,
                users: ["John", "David", "Sam"]
            };

            callback(response);

        }, 2000);
    }

    // =====================================================
    // API SCENARIO 2
    // Success and Error Callback
    // =====================================================
    getEmployee(successCallback, errorCallback) {

        let status = 200;

        if (status === 200) {

            successCallback({
                id: 101,
                name: "Taterao"
            });

        } else {

            errorCallback("API Failed");
        }
    }

    // =====================================================
    // API SCENARIO 3
    // Response Validation Callback
    // =====================================================
    validateStatus(response, callback) {

        if (response.status === 200) {

            callback("Status Validation Passed");
        }
    }

    // =====================================================
    // COMMON SCENARIO
    // Execute any action then callback
    // =====================================================
    performAction(actionName, callback) {

        console.log(actionName + " Started");

        callback();

        console.log(actionName + " Completed");
    }
}

// =====================================================
// Create Object
// =====================================================

let obj = new CallbackAutomationExamples();


// =====================================================
// UI AUTOMATION EXAMPLES
// =====================================================

// Scenario 1
obj.loginButtonClick(function () {

    console.log("Verify Home Page");

});

/*
FLOW

loginButtonClick()
      |
      v
Login Button Clicked
      |
      v
callback()
      |
      v
Verify Home Page
*/


// Scenario 2
obj.enterUsername("Taterao", function () {

    console.log("Enter Password");

});

/*
FLOW

Username Entered
      |
      v
callback()
      |
      v
Enter Password
*/


// Scenario 3
obj.pageLoad(function () {

    console.log("Verify Dashboard");

});

/*
FLOW

Page Loaded
      |
      v
callback()
      |
      v
Verify Dashboard
*/


// Scenario 4
obj.submitForm(function () {

    console.log("Verify Success Message");

});

/*
FLOW

Form Submitted
      |
      v
callback()
      |
      v
Verify Success Message
*/


// =====================================================
// API AUTOMATION EXAMPLES
// =====================================================

// Scenario 5
obj.getUsers(function (response) {

    console.log("Response Received");

    console.log(response);

    console.log("Total Users =", response.users.length);

});

/*
FLOW

Send Request
      |
      v
Wait 2 Seconds
      |
      v
Response Received
      |
      v
callback(response)
      |
      v
Validate Response
*/


// Scenario 6
obj.getEmployee(

    function (data) {

        console.log("Success Response");

        console.log(data);

    },

    function (error) {

        console.log(error);

    }

);


// Scenario 7
obj.validateStatus(

    { status: 200 },

    function (message) {

        console.log(message);

    }

);


// =====================================================
// COMMON CALLBACK EXAMPLE
// =====================================================

obj.performAction("Login Test", function () {

    console.log("Execute Selenium Steps");

});

/*
FLOW

Login Test Started
      |
      v
callback()
      |
      v
Execute Selenium Steps
      |
      v
Login Test Completed
*/