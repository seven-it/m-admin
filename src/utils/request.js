import Axios from "axios";
import { sessionStorage } from "./utils";

const service = Axios.create({
  timeout: 5000,
  headers: { "Content-Type": "application/x-www-form-urlencoded" }
});

// 添加请求拦截
service.interceptors.request.use(
  config => {
    let token = sessionStorage.getItem("token");
    if (token) {
      config.headers["X-Token"] = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
