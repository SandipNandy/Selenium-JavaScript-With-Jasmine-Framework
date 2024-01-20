var AllureReporter = require('jasmine-allure-reporter');
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
        await driver.sleep(3000);
        console.log("Window 0 (Parent Page) : ", await driver.getTitle());
    });
    it('Open New Tab', async function () {
        await driver.findElement(By.id("opentab")).click();
        let windows = await driver.getAllWindowHandles();
        console.log(windows.length);
        await driver.switchTo().window(windows[1]);
        console.log('windows (child) : ', await driver.getTitle());
        await driver.switchTo().window(windows[0]);
        console.log('windows (parent) : ', await driver.getTitle());
    });
    it('Open New Windows', async function () {
        await driver.findElement(By.id("openwindow")).click();
        let Windows = await driver.getAllWindowHandles();
        console.log(Windows.length);
        await driver.switchTo().window(Windows[1]);
        console.log("Window 1 (Child Page) : ", await driver.getTitle());
        await driver.close();
        await driver.switchTo().window(Windows[0]);
        console.log("Window 0 (Parent Page) : ", await driver.getTitle());
        await driver.quit();
    });
    it('Explicit wait Concepts', async function () {
        /**var webdriver = require('selenium-webdriver');
        var until = webdriver.until;
        var By = webdriver.By;

        until.elementIsNotPresent = function elementIsNotPresent(locator) {
            return new until.Condition('for no element to be located ' + locator, function (driver) {
                return driver.findElements(locator).then(function (elements) {
                    return elements.length == 0;
                });
            });
        };

        driver.wait(until.elementIsNotPresent(By.css(".popup-backdrop fade")), 15000);
        **/
        /**
         * 
         * 
         * 
         * 
         * const timeout = 60 * 1000; // 60 seconds
             const element = await driver.findElement(By.id(elementId));

                // this is the important line 
              await driver.wait(until.elementIsNotVisible(element), timeout);
         * 
         * 
         * 
         * 
         * 
         * 
         * 
         * 
         * 
         */
        /**
         * another concepts
         * let faderElement = webdriver.By.css('.fader');
             driver.wait(webdriver.until.elementLocated(faderElement));
           let faderElementFound = driver.findElement(faderElement);
           driver.wait(webdriver.until.elementIsVisible(faderElementFound));
            driver.wait(webdriver.until.elementIsNotVisible(faderElementFound));
         */




    });
});
