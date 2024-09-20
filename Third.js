// Require modules used in the logic below
//https://www.lambdatest.com/blog/automation-testing-with-selenium-javascript/
//https://www.browserstack.com/docs/automate/selenium/getting-started/nodejs/run-tests-in-parallel
//https://www.selenium.dev/documentation/webdriver/elements/
var AllureReporter = require('jasmine-allure-reporter');

jasmine.getEnv().addReporter(new AllureReporter({
    resultsDir: 'allure-results'
}));
const { By, Key, Builder } = require("selenium-webdriver");

const webdriver = require('selenium-webdriver');

require("chromedriver");

jasmine.DEFAULT_TIMEOUT_INTERVAL = 20 * 1000;

jasmine.getEnv().defaultTimeoutInterval = 60000;

const driver = new webdriver.Builder().usingServer('http://192.168.0.101:4444/wd/hub').forBrowser("chrome").build();

describe('First Test', function () {
    
    it('My first it block', async function () {
        
        console.log('<----- Starting to execute test case ----->');
        
        await runTestWithCaps1(driver);
        
        console.log('<----- Test case execution completed ----->');
    });
    it('My Second it block', async function () {
        console.log('<-----2 Starting to execute test case ----->');
        //await runTestWithCaps()
        
        //const driver = new webdriver.Builder().usingServer('http://192.168.0.101:4444/wd/hub').forBrowser("chrome").build();
        
        await runTestWithCaps2(driver);

        console.log('<-----2 Test case execution completed ----->');
        
        await driver.quit();
    });

});
const runTestWithCaps1 = async function (driver) {

    var searchString = "Angular and Protractor";

    //To wait for browser to build and launch properly
    //var driver = await new Builder().forBrowser("chrome").build();

    //To fetch http://google.com from the browser with our code.
    
    await driver.get("http://google.com");

    //To send a search query by passing the value in searchString.
    await driver.findElement(By.name("q")).sendKeys(searchString, Key.RETURN);

    //Verify the page title and print it
    var title = await driver.getTitle();
    console.log('Title is:', title);

    //It is always a safe practice to quit the browser after execution
    //await driver.quit();

}
const runTestWithCaps2= async function(driver){
    var searchString = "IRON MAN and Black Panther";
    await driver.get("http://google.com");
     //To send a search query by passing the value in searchString.
     await driver.findElement(By.name("q")).sendKeys(searchString, Key.RETURN);

     //Verify the page title and print it
     var title = await driver.getTitle();
     console.log('Title is:', title);

     //It is always a safe practice to quit the browser after execution
     //await driver.quit();
}


