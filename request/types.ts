/**正确情况下的返回值*/
export interface success_Response {
  code: number;
  data: any;
  message: any;
}

/**-----------------------------------------------------------注册接口------------------------------------------------------------------------------*/

export interface registeredData {
  username: string;
  password: string;
  mobile: string;
  smsCode: string;
}

export interface registerRes extends success_Response {
  code: number;
  message: string;
  data: {
    address: string;
    signature: string;
    uuid: string;
  };
}
export type registerApi = (data: registeredData) => Promise<registerRes>;

/**-----------------------------------------------------------登录接口------------------------------------------------------------------------------*/

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

/**-----------------------------------------------------------发送短信验证码------------------------------------------------------------------------------*/

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

/**-----------------------------------------------------------获取图片验证码------------------------------------------------------------------------------*/

export type verifyApi = (mobile: string | number) => Promise<string>;

/**-----------------------------------------------------------忘记密码接口------------------------------------------------------------------------------*/
export interface forgetPasswordData {
  password: string;
  mobile: string;
  smsCode: string;
}
export interface forgetPasswordRes extends success_Response {
  data: any;
}
export type forgetPasswordApi = (
  data: forgetPasswordData
) => Promise<forgetPasswordRes>;

/**-----------------------------------------------------------获取节点接口------------------------------------------------------------------------------*/

export interface getgatewayListRes extends success_Response {
  data: Array<{ host: string; nodeType: number; name: string }>;
}
export type getgatewayListApi = (he?: any) => Promise<getgatewayListRes>;

/**-----------------------------------------------------------获取文件列表接口------------------------------------------------------------------------------*/
export interface getFilesData {
  pageSize: number;
  pageNum: number;
}
export interface getFilesRes extends success_Response {
  data: Array<{
    cid: string;
    createTime: string;
    fileSize: number;
    fileType: string;
    name: string;
    host: string;
    valid:number
  }>;
}
export type getFilesApi = (data: getFilesData) => Promise<getFilesRes>;

/**-----------------------------------------------------------上传文件列表接口------------------------------------------------------------------------------*/

export interface updataFilesData {
  cid: string;
  name: string;
}
export interface updataFilesRes extends success_Response {
  data: {
    created: string;
    delegates: [];
    info: any
    pin: {
      cid: string;
      name: string;
      meta: null;
      origins: [];
    };
    requestId: string;
    status: string;
  };
}
export type updataFilesApi = (data: updataFilesData) => Promise<updataFilesRes>;

/**-----------------------------------------------------------api界面的列表接口------------------------------------------------------------------------------*/

export interface getApisRes extends success_Response {
  data: Array<{
    address: string;
    signature: string;
    valid: number;
  }>;
}

export type getApisApi = () => Promise<getApisRes>;

/**-----------------------------------------------------------用户信息接口------------------------------------------------------------------------------*/

export interface getUserInfoRes extends success_Response {
  data: {
    info: { username: string; mobile: string };
    plan: {
      downloadExpireTime: string;
      maxDownloadSize: number;
      maxStorageSize: number;
      orderType: number;
      storageExpireTime: string;
      usedDownloadSize: number;
      usedStorageSize: number;
    };
  };
}
export type getUserInfoApi = () => Promise<getUserInfoRes>;
/**-----------------------------------------------------------修改密码接口------------------------------------------------------------------------------*/

export interface changePasswordData {
  oldPassword: string;
  newPassword: string;
}
export interface changePasswordRes extends success_Response {
  data: any;
}
export type changePasswordApi = (
  data: changePasswordData
) => Promise<changePasswordRes>;
/**-----------------------------------------------------------修改密码接口------------------------------------------------------------------------------*/

export interface getticketsListRes extends success_Response {
  data: {
    count: number;
    results: Array<{
      description: string;
      feedback: string;
      id: number;
      status: number;
      ticketNo: string;
      type: number;
    }>;
  };
}
export type getticketsListApi = (
  data: getFilesData
) => Promise<getticketsListRes>;
