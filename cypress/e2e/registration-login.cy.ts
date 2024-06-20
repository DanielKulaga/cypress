import { HomePage } from '../pages/HomePage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { LoginPage } from '../pages/LoginPage';

const homePage = new HomePage();
const registrationPage = new RegistrationPage();
const loginPage = new LoginPage();

describe('User Registration and Login', () => {
  it('should register a new user and login', () => {
    homePage.visit();
    homePage.navigateToRegistrationPage();

    const email = `testuser_${Date.now()}@gmail.com`;
    registrationPage.enterFirstName('Test');
    registrationPage.enterLastName('User');
    registrationPage.enterEmail(email);
    registrationPage.enterPassword('P3!qtwe%$@#!');
    registrationPage.submitRegistration();

    loginPage.enterEmail(email);
    loginPage.enterPassword('P3!qtwe%$@#!');
    loginPage.submitLogin();

    cy.url().should('include', '/sch');
  });
});
