export class SearchResultsPage {
  applyPriceFilter(min: number, max: number) {
    cy.get('input[aria-label="Minimum Value in $"]').type(min.toString());
    cy.get('input[aria-label="Maximum Value in $"]').type(max.toString());
    cy.get('button[aria-label="Submit price range"]').click();
  }

  selectProduct() {
    cy.get('.srp-results .s-item').first().find('.s-item__title').invoke('text').then((text) => {
      const productName = text.trim();
    cy.get('.srp-results .s-item').first().scrollIntoView().should('be.visible').click().then(($link) => {
      cy.window().its('open').invoke('call', $link.attr('href'));
      cy.window().then((win) => {
        const newTab = win.openedWindows.find((w) => w.location.href.includes('/itm/'));
        expect(newTab).to.exist;
        cy.visit(newTab.location.href);
        cy.url().should('include', '/itm/');
      });
    });
  });
  }
}

export { productName };
