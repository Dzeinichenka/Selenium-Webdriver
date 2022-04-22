const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');
const MainPage = require('../pageObject/mainPage');
const BaseElements = require('../helpers/baseElements');
const SearchComponent = require('../pageObject/pageComponents/searchComponent');
const BasePage = require('../pageObject/basePage');

const mainPage = new MainPage();
const baseElements = new BaseElements();
const searchComponent = new SearchComponent();

describe('ChromeDriver Test', () => {

    after(async() => {
        await BasePage.close();
    });

    it(`Check title "ChromeDriver"`, async () => {
        await BasePage.navigate('https://chromedriver.chromium.org/home');
        await driver.wait(until.elementIsVisible(mainPage.homeTitle), 5000);
        const siteTtile = await mainPage.homeTitle;
        expect(await siteTtile.getText()).to.contain('ChromeDriver');
    })


    it(`Check title "Chrome Extencions"`, async () => {
        await BasePage.navigate('https://chromedriver.chromium.org/extensions');
        await driver.wait(until.elementIsVisible(mainPage.homeTitle), 5000);
        const siteTitle = await mainPage.homeTitle;
        expect(await siteTitle.getText()).to.contain('Chrome Extensions');
    })

    it('Check Search Results', async () => {
        await BasePage.navigate('https://chromedriver.chromium.org/');
        await baseElements.click(searchComponent.searchButton);
        await baseElements.sendKeys(searchComponent.searchText, 'driver');
        await baseElements.click(searchComponent.startSearchText);
        await driver.sleep(2000);
        await driver.wait(until.elementIsVisible(searchComponent.resultsOnThisSite), 5000);
        const descriptions = await searchComponent.searchResultDescription;
        expect(await descriptions.getText()).to.contain('driver');
    })
});