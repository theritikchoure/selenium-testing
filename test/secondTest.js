const { Builder, By } = require('selenium-webdriver');
const should = require('chai').should();


//Describe block
describe('Navigate to docfliq, without login', function () {

    //It block
    it('navigate to channels page', async function () {
        // launch the browser
        let driver = await new Builder().forBrowser('MicrosoftEdge').build();

        // navigate to application
        await driver.get('https://docfliq.com/channels')


        // close the browser
        await driver.quit();
    })
    
    //It block
    it('navigate to terms and condition page', async function () {
        // launch the browser
        let driver = await new Builder().forBrowser('MicrosoftEdge').build();

        // navigate to application
        await driver.get('https://docfliq.com/terms')


        // close the browser
        await driver.quit();
    })

});
