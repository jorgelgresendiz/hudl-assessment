const { Builder, By } = require("selenium-webdriver")
// using chai library for assertions
const { expect } = require("chai");

describe("exercise the hudl login functionality", () => {
    it("logs in to the home page with user credentials", () => {
        let driver = new Builder().forBrowser("chrome").build();
        // navigate to homepage
        driver.get("https://www.hudl.com");
        driver.findElement(By.linkText("Log in")).click().then(() => {
            // reroute to login page
            driver.findElement(By.name('email')).sendKeys('#TODO: insert user email here');
            driver.findElement(By.name('password')).sendKeys('#TODO: insert user password here');
            // reroute to homepage using user credentials 
            driver.findElement(By.id("logIn")).click().then(() => {
                let homePage = driver.getCurrentUrl();
                // assert the user is logged in via home url
                expect(homePage).to.equal('https://www.hudl.com/home');
            })
        })
    })
})
