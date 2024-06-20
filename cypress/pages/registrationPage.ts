export class RegistrationPage {
  enterFirstName(firstName: string) {
    cy.get('#firstname').type(firstName);
  }

  enterLastName(lastName: string) {
    cy.get('#lastname').type(lastName);
  }

  enterEmail(email: string) {
    cy.get('#Email').type(email);
  }

  enterPassword(password: string) {
    cy.get('#password').type(password);
  }

  submitRegistration() {
    cy.get('#EMAIL_REG_FORM_SUBMIT').click();
  }
}
