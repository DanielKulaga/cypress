import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage';

const homePage = new HomePage();
const searchResultsPage = new SearchResultsPage();

describe('Product Search and Filter', () => {
  it('search for electronics and apply filters', () => {
    homePage.visit();
    homePage.searchForProduct('electronics');

    searchResultsPage.applyPriceFilter(200, 300);

    // Verify if displayed products match the search criteria
    cy.get('.s-item__price').each(($el) => {
      const priceText = $el.text().replace('$', '').replace(/\s/g, '').replace(',', '.');
      const price = parseFloat(priceText);
      expect(price).to.be.within(200, 300);
    });
  });
});
