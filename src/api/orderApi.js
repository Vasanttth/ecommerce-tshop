import axios from "axios";

const orderApi = axios.create({
  baseURL: "https://orderservice-ir1z.onrender.com",
});

export default orderApi;