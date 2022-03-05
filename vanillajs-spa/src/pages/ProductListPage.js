function ProductListPage($target) {
  const $page = document.createElement("div");
  $page.classList = "ProductListPage";
  $page.innerHTML = "<h1>상품목록</h1>";

  this.render = () => {
    $target.appendChild($page);
  };
}

export default ProductListPage;
