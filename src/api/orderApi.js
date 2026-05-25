import axios from "axios";

const orderApi = axios.create({
  baseURL: "http://localhost:8084/api/orders",
});

export default orderApi;