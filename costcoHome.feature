Feature: As a customer, I want to check the funtions of home page of Costco

@costcoRegister
Scenario: As a cutomer, I want to create an account in costco 
Given I am on costcoHome portal
When I click on "signInRegister"
Then I should see "signInPage"
When I click on "createAccount"
Then I should see "createAccountPage"
When I enter email "artrathi@gmail.com"
And I enter password "artrathi123"
And I enter confirmPassword "artrathi123"
And I click on "createAccountButton"
Then I should see "errorMessage"
