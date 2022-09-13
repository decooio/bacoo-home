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
  if (limit < 1 * 1024) {
    //小于1KB，则转化成B
    size = limit.toFixed(2) + "B";
  } else if (limit < 1 * 1024 * 1024) {
    //小于1MB，则转化成KB
    size = (limit / 1024).toFixed(2) + "KB";
  } else if (limit < 1 * 1024 * 1024 * 1024) {
    //小于1GB，则转化成MB
    size = (limit / (1024 * 1024)).toFixed(2) + "MB";
  } else if (limit < 1 * 1024 * 1024 * 1024 * 1024) {
    //小于1TB，则转化成TB
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
  return /([\s\S]*){4,32}/.test(value) ? true : false;
};

export const mobileVerifyF: VerifyFun = (value: string) => {
  return /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(
    value
  )
    ? true
    : false;
};

export const imgCodeVerifyF: VerifyFun = (value: string) => {
  return /[a-zA-Z0-9]{4}/.test(value) ? true : false;
};
export const codeVerifyF: VerifyFun = (value: string) => {
  return /[0-9]{6}/.test(value) ? true : false;
};

export const passwordVerifyF: VerifyFun = (value: string) => {
  if (value.length < 6 || value.length > 16) {
    return false;
  } else {
    return true;
  }
};
