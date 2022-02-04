module.exports = function () {

    this.Given('I am on costcoHome portal', function () {
    return helpers.loadPage(page.costcoHome.url);
    });

    this.When(/^I click on "([^"]*)"$/, function (objectKey) {
        return page.costcoHome.clickElement(objectKey);
    });

    this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
        return page.costcoHome.elementExists(objectKey);
    }); 

    this.When(/^I enter email "([^"]*)"$/ , function(objKey1) {
        return page.costcoHome.inputEmail(objKey1);
    });    

    this.When(/^I enter password "([^"]*)"$/ , function(objKey1) {
        return page.costcoHome.inputPassword(objKey1);
    });

    this.When(/^I enter confirmPassword "([^"]*)"$/ , function(objKey1) {
        return page.costcoHome.inputConfirmPassword(objKey1);
    });

};
