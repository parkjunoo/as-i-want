import api from "../common/api.js";

function ProductListPage($target) {
  this.productList = [];
  this.$productList = document.createElement("ul");
  this.$page = document.createElement("div");

  const getAllProudctList = async () => {
    try {
      const data = await api.getProductList();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const goDetailPage = (href) => {
    console.log(href);
  };

  this.init = async () => {
    this.$page.classList = "ProductListPage";
    this.$page.innerHTML = "<h1>상품목록</h1>";
    this.productList = await getAllProudctList();
    this.render();
  };

  this.render = () => {
    this.productList.forEach((e, idx) => {
      const productPrice = e.price.toLocaleString();
      this.$productList.innerHTML += `
          <li class="Product" value="${e.id}">
            <img
              src="${e.imageUrl}"
            />
            <div class="Product__info">
              <div>${e.name}</div>
              <div>${productPrice}~</div>
            </div>
          </li>`;
    });
    this.$page.appendChild(this.$productList);
    $target.appendChild(this.$page);

    this.$productList.addEventListener("click", (e) => {
      console.log(e);
      console.log(e.querySelector("Product"));
    });

    // const $product = document.getElementsByClassName("Product");
    // console.log($product);
    // $product.addEventListener();
  };
}

export default ProductListPage;
