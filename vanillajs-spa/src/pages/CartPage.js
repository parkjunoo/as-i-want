function CartPage($target) {
  const $page = document.createElement("div");
  $page.classList = "CartPage";
  $page.innerHTML = "<h1>장바구니</h1>";
  this.render = () => {
    $target.appendChild($page);
  };
}

export default CartPage;
