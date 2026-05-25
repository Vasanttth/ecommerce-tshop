import axios from "axios";

const userApi = axios.create({
  baseURL: "http://localhost:8083/api/users",
});

export default userApi;