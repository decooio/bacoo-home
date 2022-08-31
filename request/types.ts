/**正确情况下的返回值*/
export interface success_Response {
  code: number;
  data: any;
  message: any;
}
// 注册接口
export interface registeredData {
  username: string;
  password: string;
  mobile: string;
  smsCode: string;
}

export interface registerRes extends success_Response {
  code: number;
  message: string;
}
export type registerApi = (data: registeredData) => Promise<registerRes>;


// 登录接口
export interface loginData {
  username: string;
  password: string;
}
export interface loginRes extends success_Response {
  data: {
    address: string;
    signature: string;
    uuid: string;
  };
}
export type loginApi = (data: loginData) => Promise<loginRes>;


// 发送短信验证码
export interface sendSmsData {
  mobile: string;
  verifyCode: string;
}
export interface sendSmsRes extends success_Response {
  code: number;
  message: string;
}
export type sendSmsApi = (data: sendSmsData) => Promise<sendSmsRes>;

// 获取图片验证码
export type verifyApi = (mobile: string | number) => Promise<string>;


// 忘记密码接口
export interface forgetPasswordData{
  password:string,
  mobile:string,
  smsCode:string
}
export interface forgetPasswordRes extends success_Response{
  data:any
}
export type forgetPasswordApi =(data:forgetPasswordData)=>Promise<forgetPasswordRes>;
