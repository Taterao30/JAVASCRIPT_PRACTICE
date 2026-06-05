/**
 * What is Async & Await?
  async and await are used to handle asynchronous operations in a simple and readable way.
 * 
 * 
 * 
 */
class ErrorHandling {

    static async getData() {

        try {

            let response =
                await fetch("https://wrong-url.com");

            let data =
                await response.json();

            console.log(data);

        } catch (error) {

            console.log("Error Occurred");

            console.log(error.message);

        } finally {

            console.log("Execution Completed");
        }
    }
}

ErrorHandling.getData();