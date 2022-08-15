import dayjs from "dayjs";
import CryptoJS from 'crypto-js'
import _ from 'lodash';
import utc from 'dayjs/plugin/utc'
import {Order} from "../../lib/http_billing";

dayjs.extend(utc)

export const mDayjs = dayjs;

export const validate: (name: string, value: string) => boolean = (name, value) => {
  if (!value) {
    return false
  }
  if (name === "password") {
    return value.length >= 6 && value.length <= 16
  }
  if (name === 'email') {
    // eslint-disable-next-line
    const emailRegexp = /^[\w.\-]+@(?:[a-z0-9]+(?:-[a-z0-9]+)*\.)+[a-z]{2,3}$/g
    return emailRegexp.test(value)
  }
  if (name === 'phone') {
    const phoneRegexp = /1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[235-8]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|66\d{2})\d{6}$/g
    return phoneRegexp.test(value)
  }
  return true
}

export const F_DEF = 'YYYY-MM-DD T HH:mm:ss Z'
export const F_DAY = 'YYYY-MM-DD Z'

export function formatTime(time: number | string, format = F_DEF): string {
  return dayjs(time).utc().format(format)
}

export type CN = string | null | undefined

export function classNames(...c: CN[]) {
  return c.filter(item => item && item.length).join(' ')
}

export function stringToObject(str: string | null) {
  if (!str) {
    return undefined
  }
  return JSON.parse(str)
}

export function getLogoDark() {
  return '/logo_dark.svg'
}

export function getMsg(e: any, def = 'Error') {
  console.info('res-->:', e.response)
  return _.get(e, 'response.data.Msg', _.get(e, 'message', def))
}

export function formatSize(size: number, round = 1) {
  const KB = _.round(size / 1024, round)
  if (KB < 1024) return KB + 'KB'
  const MB = _.round(size / 1024 / 1024, round)
  if (MB < 1024) return MB + 'MB'
  const GB = _.round(size / 1024 / 1024 / 1024, round)
  if (GB < 1024) return GB + 'GB'
  const TB = _.round(size / 1024 / 1024 / 1024 / 1024, round)
  if (TB < 1024) return TB + 'TB'
  const PB = _.round(size / 1024 / 1024 / 1024 / 1024 / 1024, round)
  return PB + 'PB'
}

export function getOrderStatus(order: Order) {
  const orderCreated = order.orderStatus === 0
  if (orderCreated && !order.tradeNo) return 'Unpaid'
  if (orderCreated && order.tradeNo) return 'Waiting for confirmation'
  if (order.orderStatus === 1) return 'Success'
  if (order.orderStatus === 2) return 'Canceled'
  if (order.orderStatus === 3) return 'Fail'
  return 'Unknown'
}

export function loadFromLocalStorage(key: string) {
  try {
    const data = localStorage.getItem(key);
    if (data === null) return undefined;
    return JSON.parse(data);
  } catch (e) {
    return undefined;
  }
}

export function saveItemIntoStorage(key: string, value: any) {
  try {
    const str = JSON.stringify(value)
    window.localStorage.setItem(key, str)
  } catch (e) {
    return undefined;
  }
}

export function apiToDownload(api?: string) {
  if (!api) return api
  return api.replace('api-', 'download-')
}

export function apiToGateway(api?: string) {
  if (!api) return api
  return api.replace('api-', 'ipfs-')
}
export function aesEncrypt(word: string, keyWord="XwKsGlMcdPMEhR1B"){
  const key = CryptoJS.enc.Utf8.parse(keyWord);
  const srcs = CryptoJS.enc.Utf8.parse(word);
  const encrypted = CryptoJS.AES.encrypt(srcs, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
  return encrypted.toString();
}
