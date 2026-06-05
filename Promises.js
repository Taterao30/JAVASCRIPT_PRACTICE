let promise = new Promise((resolve, reject) => {
    let apiSuccess = true;

    if (apiSuccess) {
        resolve("Data received");
    } else {
        reject("API failed");
    }
});

promise
    .then(result => console.log(result))
    .catch(error => console.log(error));