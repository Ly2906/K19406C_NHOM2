const { I } = inject()
const createLocator = require('./locator')
const createbusinessLocator = require('../create_business/locator')
module.exports = {
    create_business(website, businessname) {
        I.wait(2)
        I.click(createLocator.profileButton)
        I.wait(2)
        I.click(createLocator.swapCompanyButton)
        I.wait(2)
        I.click(createLocator.createCompanyButton)
        I.wait(2)
        I.fillField(createLocator.websiteField, website)
        I.fillField(createLocator.nameField, businessname)
        I.click(createLocator.functionField)
        I.click(createLocator.newButton)
        I.wait(4)
        I.seeTextEquals(businessname, createbusinessLocator.check)
    }
}