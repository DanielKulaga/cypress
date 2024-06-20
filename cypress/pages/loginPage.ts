export class LoginPage {
    enterEmail(email: string) {
      cy.get('#userid').type(email);
    }
  
    enterPassword(password: string) {
      cy.get('#pass').type(password);
    }
  
    submitLogin() {
      cy.get('#sgnBt').click();
    }
  }
  