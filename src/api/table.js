import request from "@/utils/request";
import baseUrl from "./base";
import qs from "qs";

// 请求用户登录接口
export const getTree = params => {
  return request.post(`${baseUrl.a}/tree`, qs.stringify(params));
};
