import axios from "axios";

const productApi = axios.create({
  baseURL: "https://productservice-w8g6.onrender.com",
});

export default productApi;