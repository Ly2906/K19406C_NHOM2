const { I } = inject()
const loginLocator = require('./locator')
module.exports = {
    login(url, email, password) {
        I.amOnPage(url)
        I.fillField(loginLocator.emailField, email)
        I.fillField(loginLocator.passwordField, password)
        I.click(loginLocator.loginButton)
        I.wait(4)

    }
}