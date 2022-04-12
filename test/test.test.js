const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');

const driver = new Builder().forBrowser('chrome').build();
driver.manage().window().maximize();

describe('ChromeDriver Test', function () {

    it('Check title "ChromeDriver"', async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        await driver.sleep(3000);
        const siteTitle = await driver.getTitle();
        expect(siteTitle).to.include('ChromeDriver');
    })


    it('Check title "Chrome Extencions"', async() => {
        await driver.get('https://chromedriver.chromium.org/home');
        await driver.sleep(3000);
        const chromeExtencions = await driver.findElement(By.xpath('//ul[@jsname = "waIgnc"]//a[text() = "Chrome Extensions"]'));
        await chromeExtencions.click();
        await driver.sleep(3000);
        const siteTitle = await driver.getTitle();
        expect(siteTitle).to.include('Chrome Extensions');

    })
    
    it('Check search', async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        await driver.sleep(3000);
        const searchButton = await driver.findElement(By.xpath('//div[@aria-label = "Открыть поле поиска"]'));
        await searchButton.click();
        const searchText = await driver.findElement(By.xpath('//input[@class="whsOnd zHQkBf"]'));
        await driver.wait(until.elementIsVisible(searchText), 3000)
        await searchText.sendKeys('driver');
        const startSearchText = await driver.findElement(By.xpath('//div[contains(@class, "U26fgb mUbCce fKz7Od i3PoXe")]/span/span'));
        await startSearchText.click();
        await driver.sleep(3000);
        const firstResult = await driver.findElement(By.xpath('//div[contains(@class, "gtazFe")][1]/div/div'));
        expect(await firstResult.getText()).to.contain('driver');  
    })
})


 