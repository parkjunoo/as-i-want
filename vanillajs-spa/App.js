import ProductListPage from "./src/pages/ProductListPage.js";
import ProductDetail from "./src/pages/ProductDetailPage.js";
import CartPage from "./src/pages/CartPage.js";
// import AxiosInstance from "./axios.js";

async function App($target) {
  const { pathname } = location;
  this.route = {};

  $target.innerHTML = "";

  this.route["/"] = new ProductListPage($target);
  this.route["/products/"] = new ProductDetail($target);
  this.route["/cart"] = new CartPage($target);

  this.route[pathname].init();
  console.log("!!!!!!!!!!!! res");
  // const res = await getData();
}

const getData = () => {
  return AxiosInstance.get("https://api.thecatapi.com/v1/images/search");
};

export default App;
