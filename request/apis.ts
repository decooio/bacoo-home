import request from "./request";
import {
  registerApi,
  loginApi,
  sendSmsApi,
  verifyApi,
  forgetPasswordApi,
  getgatewayListApi,
  getFilesApi,
  updataFilesApi,
  getApisApi,
  getUserInfoApi,
  changePasswordApi,
  getticketsListApi,
} from "./types";
/**-----------------------------------------------------------注册------------------------------------------------------------------------------*/

export const REGISTERED_ADDRESS = "common/user";
export const REGISTERED_API: registerApi = (data) => {
  return request(REGISTERED_ADDRESS, data);
};

/**-----------------------------------------------------------登录------------------------------------------------------------------------------*/
export const LOGIN_ADDRESS = "common/login";
export const LOGIN_API: loginApi = (data) => {
  return request(LOGIN_ADDRESS, data);
};
/**-----------------------------------------------------------获取图片验证码------------------------------------------------------------------------------*/

export const VERIFY_CODE_ADDRESS = "common/verify/svg";
export const VERIFY_CODE_API: verifyApi = (mobile) => {
  return request(
    `${VERIFY_CODE_ADDRESS}?mobile=${mobile}`,
    {},
    { method: "get", hint: true, loading: true }
  );
};

/**-----------------------------------------------------------发送验证短信------------------------------------------------------------------------------*/

export const SEMDSMS_ADDRESS = "common/verify/sms";
export const SEMDSMS_API: sendSmsApi = (data) => {
  return request(
    SEMDSMS_ADDRESS,
    data,
    {
      method: "post",
      hint: false,
      loading: true,
    }
    // { "connect.sid": setCookie }
  );
};

/**-----------------------------------------------------------发送邮箱验证码------------------------------------------------------------------------------*/

export const SEMD_MAILCODE = "common/verify/email";
export const SEMD_MAILCODE_API = (email: string) => {
  return request(
    SEMD_MAILCODE,
    { email },
    {
      method: "post",
      hint: true,
      loading: true,
    }
    // { "connect.sid": setCookie }
  );
};
/**-----------------------------------------------------------忘记密码接口------------------------------------------------------------------------------*/

export const FORGET_PASSWORD = "common/reset/password";
export const FORGET_PASSWORD_API: forgetPasswordApi = (data) => {
  return request(FORGET_PASSWORD, data, {
    hint: true,
    method: "post",
    loading: true,
  });
};

/**-----------------------------------------------------------获取节点列表接口------------------------------------------------------------------------------*/

export const GET_GATEWAY_LIST = "auth/gateway/list";
export const GET_GATEWAY_LIST_API: getgatewayListApi = () => {
  return request(
    GET_GATEWAY_LIST,
    {},
    { hint: false, method: "get", loading: true }
  );
};

/**-----------------------------------------------------------获取文件列表接口------------------------------------------------------------------------------*/

export const GET_FILE_LIST = "auth/file/list";
export const GET_FILE_LIST_API: getFilesApi = (data) => {
  return request(
    `${GET_FILE_LIST}?pageSize=${data.pageSize}&pageNum=${data.pageNum}`,
    {},
    {
      hint: false,
      method: "get",
      loading: true,
    }
  );
};

/**-----------------------------------------------------------获取文件列表总数接口------------------------------------------------------------------------------*/
export const GET_FILE_SIZE = "auth/file/list/size";
export const GET_FILE_SIZE_API = () => {
  return request(
    GET_FILE_SIZE,
    {},
    {
      hint: false,
      method: "get",
      loading: true,
    }
  );
};

/**-----------------------------------------------------------上传的文件列表接口------------------------------------------------------------------------------*/

export const UPDATA_FILE = "psa/pins";
export const UPDATA_FILE_API: updataFilesApi = (data) => {
  return request(UPDATA_FILE, data, {
    method: "post",
    hint: false,
    loading: false,
  });
};

/**-----------------------------------------------------------api界面的列表接口------------------------------------------------------------------------------*/

export const GET_APIS = "auth/key/list";

export const GET_APIS_API: getApisApi = () => {
  return request(GET_APIS, {}, { loading: true, hint: true, method: "get" });
};

/**-----------------------------------------------------------用户信息接口------------------------------------------------------------------------------*/

export const GET_USER_INFO = "auth/user/profile";

export const GET_USER_INFO_API: getUserInfoApi = () => {
  return request(
    GET_USER_INFO,
    {},
    { loading: true, hint: true, method: "get" }
  );
};

/**-----------------------------------------------------------修改密码接口------------------------------------------------------------------------------*/
export const CHANGE_PASSWORD = "auth/password/change";
export const CHANGE_PASSWORD_API: changePasswordApi = (data: {
  oldPassword: string;
  newPassword: string;
}) => {
  return request(CHANGE_PASSWORD, data);
};

/**-----------------------------------------------------------工单列表接口------------------------------------------------------------------------------*/

export const GET_TICKETS_LIST = "auth/tickets/list";
export const GET_TICKETS_LIST_API: getticketsListApi = (data: {
  pageSize: number;
  pageNum: number;
}) => {
  return request(
    `${GET_TICKETS_LIST}?pageSize=${data.pageSize}&pageNum=${data.pageNum}`,
    {},
    {
      hint: false,
      method: "get",
      loading: true,
    }
  );
};

/**-----------------------------------------------------------提交工单列表接口------------------------------------------------------------------------------*/
export const SUBMIT_TICKETS = "auth/tickets/report";
export const SUBMIT_TICKETS_API = (data: {
  description: string;
  type: string | number;
  title:string
}) => {
  return request(SUBMIT_TICKETS, data, {
    method: "post",
    hint: true,
    loading: false,
  });
};

/**----------------------------------------------------------获取工单详情接口------------------------------------------------------------------------------*/
export const GET_TICKETS_DETAILS = "auth/tickets/info/";
export const GET_TICKETS_DETAILS_API = (id: string | number) => {
  return request(
    `${GET_TICKETS_DETAILS}${id}`,
    {},
    {
      method: "get",
      hint: true,
      loading: false,
    }
  );
};

/**----------------------------------------------------------短信验证码接口(修改手机号)------------------------------------------------------------------------------*/
export const SET_MOBILE_SMS = "auth/mobile/change/sms";
export const SET_MOBILE_SMS_API = (mobile: string) => {
  return request(
    `${SET_MOBILE_SMS}`,
    {
      mobile,
    },
    {
      method: "post",
      hint: true,
      loading: false,
    }
  );
};

/**----------------------------------------------------------修改手机号接口------------------------------------------------------------------------------*/
export const SET_MOBILE = "auth/mobile/change";
export const SET_MOBILE_API = (data: { mobile: string; smsCode: string }) => {
  return request(`${SET_MOBILE}`, data, {
    method: "post",
    hint: true,
    loading: false,
  });
};

/**----------------------------------------------------------提交存储使用意向------------------------------------------------------------------------------*/
export const POST_INTENTION = "auth/intention";
export const POST_INTENTION_API = (data: {
  storageType: number;
  gatewayType: number;
  requirement: string;
}) => {
  return request(`${POST_INTENTION}`, data, {
    method: "post",
    hint: true,
    loading: false,
  });
};

/**----------------------------------------------------------修改报告解决状态------------------------------------------------------------------------------*/
export const SET_SOLVEd = "auth/tickets/feedback/resolved";
export const SET_UNSOLVEd = "auth/tickets/feedback/unresolved";

export const SET_SOLVEd_API = (id: string | number) => {
  return request(
    `${SET_SOLVEd}/${id}`,
    {},
    { method: "post", hint: true, loading: false }
  );
};

export const SET_UNSOLVEd_API = (id: string | number) => {
  return request(
    `${SET_UNSOLVEd}/${id}`,
    {},
    { method: "post", hint: true, loading: false }
  );
};
