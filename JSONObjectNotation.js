class JsonDemo {

    static run() {

        let response = {
            id: 101,
            name: "Taterao",
            role: "QA Engineer",
            active: true,
            skills: ["Java", "Selenium", "API"]
        };

        console.log(response.name);

        console.log(response.skills[0]);

        let jsonString =
            JSON.stringify(response);

        console.log(jsonString);

        let objectData =
            JSON.parse(jsonString);

        console.log(objectData.role);

        if(objectData.name === "Taterao")
        {
            console.log("Validation Passed");
        }
    }
}

JsonDemo.run();
