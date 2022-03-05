function ProductDetailPage($target) {
  const $page = document.createElement("div");
  $page.classList = "ProductDetailPage";
  $page.innerHTML = "<h1>상품 정보</h1>";

  this.render = () => {
    $target.appendChild($page);
  };
}

export default ProductDetailPage;
