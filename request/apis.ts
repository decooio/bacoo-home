import request from "./request";
import {
  registerApi,
  loginApi,
  sendSmsApi,
  verifyApi,
  forgetPasswordApi,
} from "./types";
// 注册
export const REGISTERED_ADDRESS = "common/user";
export const REGISTERED_API: registerApi = (data) => {
  return request(REGISTERED_ADDRESS, data);
};
// 登录
export const LOGIN_ADDRESS = "common/login";
export const LOGIN_API: loginApi = (data) => {
  return request(LOGIN_ADDRESS, data);
};
// 验证码
export const VERIFY_CODE_ADDRESS = "common/verify/svg";
export const VERIFY_CODE_API: verifyApi = (mobile) => {
  return request(
    `${VERIFY_CODE_ADDRESS}?mobile=${mobile}`,
    {},
    { method: "get", hint: true,loading:true }
  );
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
      loading:true
    }
    // { "connect.sid": setCookie }
  );
};

// 忘记密码接口
export const FORGET_PASSWORD = "common/reset/password";
export const FORGET_PASSWORD_API: forgetPasswordApi = (data) => {
  return request(FORGET_PASSWORD, data, { hint: false, method: "post",loading:true });
};
