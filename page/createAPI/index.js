const { I } = inject()
const createAPILocator = require('./locator')
module.exports = {
    create_API(key) {
        I.wait(2)
        I.click(createAPILocator.matPanel)
        I.wait(2)
        I.click(createAPILocator.apiKey)
        I.wait(2)
        I.click(createAPILocator.createAPIButton)
        I.wait(2)
        I.fillField(createAPILocator.nameField, key)
        I.wait(2)
        I.click(createAPILocator.createandseenAPIButton)
        I.wait(2)
        I.click(createAPILocator.completeButton)
        I.wait(2)
        I.seeTextEquals(key, createAPILocator.check)
    }
}