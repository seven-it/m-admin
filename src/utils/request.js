import Axios from "axios";
import { sessionStorage } from "./utils";

// const BASE_URL = process.env.NODE_ENV === "production" ? "" : ""; // 根据环境切换url

const service = Axios.create({
  timeout: 5000,
  headers: { "Content-Type": "application/x-www-form-urlencoded" }
});

// 添加请求拦截
service.interceptors.request.use(
  config => {
    let token = sessionStorage.getItem("token");
    if (token) {
      config.headers["token"] = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
