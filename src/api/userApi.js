import axios from "axios";

const userApi = axios.create({
  baseURL: "https://userservice-i9oa.onrender.com/api/users",
});

export default userApi;