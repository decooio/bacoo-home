import { Form } from "antd";

export const getLoc = (key: string) => {
  return localStorage.getItem(key);
};
export const setLoc = (key: string, value: string) => {
  return localStorage.setItem(key, value);
};
export const changeSize = (limit: number | undefined) => {
  let size = "";
  if (!limit) {
    return "0kb";
  }
  if (limit < 0.1 * 1024) {
    //小于0.1KB，则转化成B
    size = limit.toFixed(2) + "B";
  } else if (limit < 0.1 * 1024 * 1024) {
    //小于0.1MB，则转化成KB
    size = (limit / 1024).toFixed(2) + "KB";
  } else if (limit < 0.1 * 1024 * 1024 * 1024) {
    //小于0.1GB，则转化成MB
    size = (limit / (1024 * 1024)).toFixed(2) + "MB";
  } else if (limit < 0.1 * 1024 * 1024 * 1024 * 1024) {
    //小于0.1TB，则转化成TB
    size = (limit / (1024 * 1024 * 1024)).toFixed(2) + "GB";
  } else {
    // 其余转换为TB
    size = (limit / (1024 * 1024 * 1024 * 1024)).toFixed(2) + "TB";
  }

  const sizeStr = size + ""; //转成字符串
  const index = sizeStr.indexOf("."); //获取小数点处的索引
  const dou = sizeStr.substr(index + 1, 2); //获取小数点后两位的值
  if (dou == "00") {
    //判断后两位是否为00，如果是则删除00
    return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2);
  }
  return size;
};

type ValidateStatus = Parameters<typeof Form.Item>[0]["validateStatus"];
type VerifyObj = {
  value: string;
  validateStatus: ValidateStatus;
  errorMsg: string | null;
};
type VerifyFun = (value: string) => VerifyObj;

export const mobileVerifyF: VerifyFun = (value: string) => {
  const mobileRex =
    /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
  const obj: VerifyObj = {
    value,
    validateStatus: "success",
    errorMsg: null,
  };
  if (obj.value.length === 0) {
    obj.validateStatus = "error";
    obj.errorMsg = "请输入手机号";
    return obj;
  }
  if (mobileRex.test(value)) {
    obj.validateStatus = "success";
    obj.errorMsg = null;
  } else {
    obj.validateStatus = "error";
    obj.errorMsg = "请输入正确的手机号";
  }

  return obj;
};

export const codeVerifyF: VerifyFun = (value: string) => {
  const obj: VerifyObj = {
    value,
    validateStatus: "success",
    errorMsg: null,
  };
  if (value.length === 0) {
    obj.validateStatus = "error";
    obj.errorMsg = "请输入验证码";
  } else {
    obj.validateStatus = "success";
    obj.errorMsg = null;
  }
  return obj;
};



export const passwordVerifyF: VerifyFun = (value: string) => {
  const passwordRex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[a-z]{6,16}/;
  const obj:VerifyObj = {
    value,
    validateStatus: "success",
    errorMsg: "请输入密码",
  };
  if (value.length === 0) {
    obj.validateStatus = "error";
    obj.errorMsg = "请输入密码";
  }
  if (passwordRex.test(value)) {
    obj.validateStatus = "success";
    obj.errorMsg = null;
  } else {
    obj.validateStatus = "error";
    obj.errorMsg = "请输入正确的手机号";
  }

  return obj;
};
