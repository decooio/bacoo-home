

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

type VerifyFun = (value: string) => boolean;

export const usernameVerifyF: VerifyFun = (value) => {
  return !(value.length === 0);
};

export const mobileVerifyF: VerifyFun = (value: string) => {
  const mobileRex =
    /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;

  if (value.length === 0) {
    return false;
  } else if (mobileRex.test(value)) {
    return true;
  } else {
    return false;
  }
};

export const codeVerifyF: VerifyFun = (value: string) => {
  return !(value.length === 0);
};

export const passwordVerifyF: VerifyFun = (value: string) => {
  const passwordRex = /[a-z]{1}/;
  if (value.length === 0) {
    return false;
  } else if (passwordRex.test(value)) {
    return true;
  } else {
    return false;
  }
};
