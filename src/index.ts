export const getLoc = (key: string) => {
  return localStorage.getItem(key);
};
export const setLoc = (key: string, value: string) => {
  return localStorage.setItem(key, value);
};
export const changeSize = (limit: number | undefined) => {
  let size = "";
  if(!limit){
    return '0kb'
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
