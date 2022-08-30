import request from "./request";
import { registerApi, loginApi, sendSmsApi, verifyApi } from "./types";
// 注册
export const REGISTERED_ADDRESS = "signup";
export const REGISTERED_API: registerApi = (data) => {
  return request(REGISTERED_ADDRESS, data);
};
// 登录
export const LOGIN_ADDRESS = "login";
export const LOGIN_API: loginApi = (data) => {
  return request(LOGIN_ADDRESS, data);
};
// 验证码
export const VERIFY_CODE_ADDRESS = "common/verify/svg";
export const VERIFY_CODE_API: verifyApi = (mobile) => {
  return request(`${VERIFY_CODE_ADDRESS}?mobile=${mobile}`, {}, { method: "get", hint: true });
};
// 发送验证短信
export const SEMDSMS_ADDRESS = "common/verify/sms";
export const SEMDSMS_API: sendSmsApi = (data) => {
  return request(
    SEMDSMS_ADDRESS,
    data,
    {
      method: "post",
      hint: true,
    },
    // { "connect.sid": setCookie }
  );
};
