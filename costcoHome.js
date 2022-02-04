const helpers = require("../runtime/helpers");

module.exports = {

    url: 'https://www.costco.com/',

    elements: {
        signInRegister: '//*[@id="header_sign_in"]',
        signInPage: '/html/body/div[2]',
        createAccount: '//*[@id="createAccount"]',
        createAccountPage: '//*[@id="mainContent"]',
        email: by.id('email'),
        password: by.id('newPassword'),
        confirmPassword: by.id('reenterPassword'),
        createAccountButton:'/html/body/div[2]/div[1]/div/div[1]/form/div[6]/button[1]',
        errorMessage: '/html/body/div[2]/div[1]/div/div[1]/form/div[4]'


    },

    clickElement: async function(objectKey) {
         
        var selector = page.costcoHome.elements[objectKey];

        await driver.sleep(1000);
        return driver.findElement(By.xpath(selector)).click();
    },

    elementExists: async function(objectKey) {
         
        var selector = page.costcoHome.elements[objectKey];

        await driver.sleep(1000);
        return driver.findElement(By.xpath(selector));
    },

    inputEmail: async function(val) {
        
        var selector = page.costcoHome.elements['email']; 
        await driver.sleep(1000);  
        return driver.findElement(selector).sendKeys(val);
    },
    inputPassword: async function(val) {
         
        var selector = page.costcoHome.elements['password'];  
        await driver.sleep(1000);  
        return driver.findElement(selector).sendKeys(val);

    },
    inputConfirmPassword: async function(val) {
        
        var selector = page.costcoHome.elements['confirmPassword']; 
        await driver.sleep(1000);  
        return driver.findElement(selector).sendKeys(val);

    },
};