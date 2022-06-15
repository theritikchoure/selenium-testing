const { Builder, By } = require('selenium-webdriver');
const should = require('chai').should();


//Describe block
describe('Navigate to docfliq.com, without login', function () {

    //It Block
    it('first channel should be channel ', async function () {
        // launch the browser
        let driver = await new Builder().forBrowser('MicrosoftEdge').build();

        // navigate to application
        await driver.get('https://docfliq.com')

        // click on get to goal
        await driver.findElement(By.xpath('//*[@id="preLogin"]/div[4]/div/a'))

        const channelName = await driver.findElement(By.xpath('//*[@id="preLogin"]/div[4]/div/a')).getText();

        //assert using chai
        channelName.should.equal('Get to Goal with Incretins');

        // close the browser
        await driver.quit();
    })

});
