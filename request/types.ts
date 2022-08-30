/**正确情况下的返回值*/
export interface success_Response {
  config: number;
  data: string;
  headers: any;
  request: any;
  status: number;
  statusText: string;
}
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

export interface loginData {
  username: string;
  password: string;
}
export interface loginRes extends success_Response {
  code: number;
  message: string;
}
export type loginApi = (data: loginData) => Promise<loginRes>;

export interface sendSmsData {
  mobile: string;
  verifyCode: string;
}
export interface sendSmsRes extends success_Response {
  code: number;
  message: string;
}
export type sendSmsApi = (data: sendSmsData) => Promise<sendSmsRes>;

export interface verifyApiRes extends success_Response {
  data: string;
}
export type verifyApi = (mobile: string | number) => Promise<verifyApiRes>;
