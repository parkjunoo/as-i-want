const baseUrl = "http://localhost:62743/mock/";

const getProductList = () => {
  const response = fetch(baseUrl + "/products.json");
  return response.then((res) => res.json());
};
const getProductDetail = (id) => {
  const response = fetch(baseUrl + `/products${id}.json`);
  return response.then((res) => res.json());
};

export default { getProductList, getProductDetail };
