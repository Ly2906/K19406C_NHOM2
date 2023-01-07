const { I } = inject()
const deleteAPILocator = require('./locator')
module.exports = {
    delete_API() {
        I.wait(2)
        I.click(deleteAPILocator.deleteButton)
        I.wait(2)
        I.click(deleteAPILocator.confirmButton)
        I.wait(2)
        I.see('Bắt đầu khởi tạo API Key')
    }
}