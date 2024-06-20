import { HomePage } from '../pages/HomePage';
import { SearchResultsPage, productName } from '../pages/SearchResultsPage';
import { ProductDetailsPage } from '../pages/ProductDetailsPage';
import { CartPage } from '../pages/CartPage';


const homePage = new HomePage();
const searchResultsPage = new SearchResultsPage();
const productDetailsPage = new ProductDetailsPage();
const cartPage = new CartPage();

describe('Add Items to Cart', () => {
  it('should add a product to the cart', () => {
    homePage.visit();
    homePage.searchForProduct('electronics');

    searchResultsPage.selectProduct();

    productDetailsPage.addToCart();

    cartPage.verifyProductInCart(productName);
  });
});
