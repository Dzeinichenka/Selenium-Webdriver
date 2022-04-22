const { Builder, By, until } = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();

class BasePage {
    constructor () {
        global.driver = driver;
    }

    static async navigate(url) {
        await driver.get(url);
    }

    static async close() {
        await driver.close();
    }

    static async getTitle() {
        await driver.getTitle();
    }
}

module.exports = BasePage;