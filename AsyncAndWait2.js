class LoginPage {

//Code won't execute, it is just an example

    async login(page) {

        await page.fill("#username", "admin");

        await page.fill("#password", "admin123");

        await page.click("#login");

        await page.waitForSelector("#dashboard");

        console.log("Dashboard Loaded");
    }
}

const obj = new LoginPage();
obj.login(page);