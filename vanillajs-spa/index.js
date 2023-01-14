import AxiosInstance from "./axioss.js";

const res = await getData();
console.log("!!!!!!!!!!!!!", res);

const getData = () => {
  return AxiosInstance.get("https://api.thecatapi.com/v1/images/search");
};
