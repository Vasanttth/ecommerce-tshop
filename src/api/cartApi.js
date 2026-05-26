import axios from "axios";

const cartApi = axios.create({
  baseURL: "https://cartservice-mpui.onrender.com",
});

export default cartApi;