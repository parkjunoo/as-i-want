import ProductListPage from "./src/pages/ProductListPage.js";
import ProductDetail from "./src/pages/ProductDetailPage.js";
import CartPage from "./src/pages/CartPage.js";

function App($target) {
  const { pathname } = location;
  $target.innerHTML = "";

  this.route = {};
  this.route["/"] = new ProductListPage($target);
  this.route["/products/"] = new ProductDetail($target);
  this.route["/cart"] = new CartPage($target);

  this.route[pathname].render();
}

export default App;
