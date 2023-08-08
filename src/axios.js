import axios from "axios";

const instance = axios.create({
  baseURL: "https://wild-pink-ant-tam.cyclic.app",
  // baseURL: "http://localhost:8080",
});

export default instance;
