import axios from "axios";

const instance = axios.create({
  baseURL: "https://wild-pink-ant-tam.cyclic.app",
});

export default instance;
