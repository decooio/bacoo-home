import React from "react";
import { getLoc } from "@src/index";
import { message } from "antd";
import axios from "axios";
import {
  REGISTERED_ADDRESS,
  LOGIN_ADDRESS,
  SEMDSMS_ADDRESS,
  VERIFY_CODE_ADDRESS,
} from "./apis";
const BASE_URL = "https://beta-api.baitech-ipfs.net/";
import ReactDOM from "react-dom";
import { AppLoading } from "../components/common/Loading";
import { Spin } from "antd";

type RequestConfig = {
  method?: "get" | "post" | "put" | "delete";
  hint: boolean;
  loading: boolean;
};
export type ResponseFun<T> = (
  url: string,
  data?: any,
  config?: RequestConfig,
  addHeaders?: { [key: string]: string }
) => Promise<T>;

export type Response = {
  config?: any;
  data: any;
  headers?: any;
  request?: any;
  status: number;
  statusText?: string;
};
export type ErrorResponse = {
  code?: string;
  config?: any;
  message?: string;
  name?: string;
  request?: any;
  response: Response;
};

/** 默认请求头 */
const REQUEST_HEADER = {
  "Content-Type": "application/json",
  Accept: "*/*",
};
/**带token请求头 */
const setTokenToHeader = () => ({
  ...REQUEST_HEADER,
  Authorization: getLoc("token"),
});


const request: ResponseFun<any> = (
  url,
  data = {},
  config = {
    method: "post",
    hint: true,
    loading: true,
  },
  addHeaders
) => {
  // let AppLoadingDom = AppLoading;
  if (config.loading) {
    const dom = document.createElement("div");
    dom.setAttribute("id", "loading");
    document.body.appendChild(dom);
    // ReactDOM.render(<AppLoadingDom />, dom);
  }
  url = BASE_URL + url;
  const headers = [
    REGISTERED_ADDRESS,
    LOGIN_ADDRESS,
    SEMDSMS_ADDRESS,
    VERIFY_CODE_ADDRESS,
  ].includes(url)
    ? REQUEST_HEADER
    : setTokenToHeader();
  return new Promise((resolve, reject) => {
    const service = axios.create({
      baseURL: url,
      timeout: 10000,
      withCredentials: true, //开启
    });
    service({
      url,
      method: config.method || "post",
      data,
      withCredentials: true,
      headers: { ...headers, ...addHeaders },
    })
      .then((res: Response) => {
        if (res.status !== 200) {
          reject(res.data);
          message.error(res.data.message);
        } else {
          console.log(res);

          resolve(res.data);
        }
      })
      .catch((err: ErrorResponse) => {
        console.log(err);

        // if (config.hint) message.error(err.response.data.message);
        // reject(err.response.data);
      });
  });
};
export default request;
