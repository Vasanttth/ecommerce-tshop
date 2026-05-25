import axios from "axios";

const cartApi = axios.create({
  baseURL: "http://localhost:8082/api/cart",
});

export default cartApi;