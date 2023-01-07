const { I } = inject();
const email = 'tranthihaly12@gmail.com'
const password = 'Ly29062001.'
const loginFunction = require('../page/login/index')
const loginLocator = require('../page/login/locator')
const randomFunction = require('../page/commons/functions')
const website = 'https://nhom2.com'
const businessname = 'K19406C_Nhom2'
const createFunction = require('../page/create_business/index')
const createAPIFunction = require('../page/createAPI/index')
const changeAPIFunction = require('../page/changeAPI/index')
const deleteAPIFunction = require('../page/deleteAPI/index')
const randomName = randomFunction.randomString(8)
const randomeditName = randomFunction.randomString(5)
Given('I login, create a business, create, edit and delete API in Casso page', () => {
    loginFunction.login(loginLocator.url, email, password),
        createFunction.create_business(website, businessname),
        createAPIFunction.create_API(randomName),
        changeAPIFunction.change_API(randomeditName),
        deleteAPIFunction.delete_API()
})