export class CartPage {
    verifyProductInCart(productName: string) {
      cy.get('.cart-bucket-lineitem-title').contains(productName).should('exist');
    }
  }
  