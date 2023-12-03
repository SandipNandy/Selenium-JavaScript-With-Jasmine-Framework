var AllureReporter = require('jasmine-allure-reporter');
const { until } = require('selenium-webdriver');
jasmine.getEnv().addReporter(new AllureReporter({
    resultsDir: 'allure-results'
}));

const { By, Key, Builder } = require("selenium-webdriver");
const webdriver = require('selenium-webdriver');

require("chromedriver");
//require("geckodriver");
//require("iedriver");
jasmine.DEFAULT_TIMEOUT_INTERVAL = 20 * 1000;

jasmine.getEnv().defaultTimeoutInterval = 60000;

//const driver = new webdriver.Builder().usingServer('http://192.168.0.100:4444/wd/hub').forBrowser("chrome").build();

var driver = new Builder().forBrowser("chrome").build();
describe('First Test', function () {
    it('Launch URL', async function () {
        await driver.get("https://courses.letskodeit.com/practice");
        await driver.manage().window().maximize();
        //await driver.sleep(3000);
        await driver.wait(until.urlContains('https://courses.letskodeit.com/practice'), 16000);
        console.log("Window 0 (Parent Page) : ", await driver.getTitle());

    });
    it('Frames', async function () {
        //JavascriptExecutor js = (JavascriptExecutor) driver;
        //driver.executeScript
        //driver.executeScript("window.scrollTo(0, document.body.scrollHeight)");//for scrolling to the end

        driver.executeScript("window.scrollTo(0, 500)");

        //switch to frame using id
        //await driver.switchTo().frame('frame-id');

        //switch to frame using name
        //await driver.switchTo().frame('frame-name');

        //switch to frame using web element
        //await driver.switchTo().frame(driver.findElement(By.webLocator('frame-web-locator-property')));
        //await driver.sleep(3000);
          await driver.switchTo().frame('courses-iframe');
          console.log('URLs : ',await driver.getCurrentUrl());
         // await driver.findElement(By.id("search")).sendKeys('Complete Test Automation Bundle');


    });

})
