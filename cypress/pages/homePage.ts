export class HomePage {
    visit() {
      cy.visit('/');
    }
  
    navigateToRegistrationPage() {
      cy.get('#gh-ug-flex a').contains('zarejestruj').click();
    }
  
    navigateToLoginPage() {
      cy.get('#gh-ug-flex a').contains('Zaloguj się').click();
    }
  
    searchForProduct(product: string) {
      cy.get('#gh-ac').type(product);
      cy.get('#gh-btn').click();
    }
  }
  