import axios from "axios";

const apiInstance = axios.create({
  baseURL: "http://localhost:1337/api",
});

export default apiInstance;
