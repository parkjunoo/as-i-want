const baseUrl = "http://localhost:59239/mock/";

const getProductList = () => {
  const response = fetch(baseUrl + "/products.json");
  return response.then((res) => res.json());
};
const getProductDetail = () => {};

export default { getProductList, getProductDetail };
