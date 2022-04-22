const { Builder, By, until } = require('selenium-webdriver');
const BasePage = require('../basePage');

class SearchComponent extends BasePage {
    get searchButton() {
        return driver.findElement(By.xpath('//div[@aria-label = "Открыть поле поиска"]'))
    }

    get searchText() {
        return driver.findElement(By.xpath('//input[@class="whsOnd zHQkBf"]'))
    } 

    get startSearchText() {
        return driver.findElement(By.css('.U26fgb.mUbCce.fKz7Od.i3PoXe.M9Bg4d .vu8Pwe'));
    }

    get resultsOnThisSite() {
        return driver.findElement(By.css('.x8xhwb'))
    }

    get searchResultDescription() {
        return driver.findElement(By.css('.yDWqEe'));
    } 
}

module.exports = SearchComponent