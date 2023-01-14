import axios from "axios";

console.log("!!!!!!!!");
const AxiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default AxiosInstance;
