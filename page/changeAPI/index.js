const { I } = inject()
const changeAPILocator = require('./locator')
module.exports = {
    change_API(changenameAPI) {
        I.wait(2)
        I.click(changeAPILocator.changeButton)
        I.wait(2)
        I.fillField(changeAPILocator.nameField, changenameAPI)
        I.wait(2)
        I.click(changeAPILocator.saveAPIButton)
        I.wait(2)
    }
}