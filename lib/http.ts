import {Api, IFile, IPinFile} from "../src/types/manager";
import {baseUrl} from "../src/helper/const";
import got, {AxiosError, AxiosRequestConfig, CancelTokenSource} from 'axios';

type JSON = Record<string, any>

export async function wFetch<T>(path: string, init: AxiosRequestConfig) {
  const url = `${baseUrl}${path}`
  return got.request<T>({
    url,
    ...init,
  });
}

const defHeads = {
  'content-type': 'application/json'
}

export function httpPost<T>(path: string, json?: JSON,
                            headers: Record<string, string> = defHeads)
  : Promise<T> {
  return wFetch<T>(path, {
    method: 'POST',
    data: json,
    headers,
  }).then(res => res.data)
}

export function httpGet<T>(path: string,
                           headers: Record<string, string> = defHeads)
  : Promise<T> {
  return wFetch<T>(path, {
    headers
  }).then(res => res.data)
}

function createAuth(jwt?: string): Record<string, string> {
  const mJwt = jwt != undefined ? jwt : window.localStorage.getItem('JWT')
  const headers: Record<string, string> = {}
  if (mJwt) headers['Authorization'] = `Bearer ${mJwt}`
  return headers
}

export function httpGetWithCert<T>(path: string, jwt?: string): Promise<T> {
  const headers = createAuth(jwt)
  headers['content-type'] = 'application/json'
  return httpGet<T>(path, headers)
}

export function httpPostWithCert<T>(path: string, body?: JSON, jwt?: string): Promise<T> {
  const headers = createAuth(jwt)
  headers['content-type'] = 'application/json'
  return httpPost<T>(path, body, headers)
}


export function pinFileToIpfs(filePath: string, uuid: string) {
  return httpPost(`/api/ipfs/decoo/pin`, {
    cosUrl: filePath,
    uuid,
  })
}

export async function getPinedInfo(uuid: string) {
  return httpGet(`/api/ipfs/decoo/file/pinHash/${uuid}`)
}

function forIResponse<T>(res: IResponse<T>) {
  if (!res) {
    throw 'error'
  } else if (res.Code !== 200) {
    throw typeof res === "string" ? res : res.Msg
  } else {
    return res.Data
  }
}

export async function login(form: BasicUserInfo): Promise<IUserInfo> {
  return wFetch<IResponse<IUserInfo>>(`/auth/login`, {
    method: 'POST',
    data: form,
    headers: defHeads
  })
    .then(res => {
      const jwt = res.headers.authorization
      if (jwt) window.localStorage.setItem('JWT', jwt)
      return res.data
    }).then(forIResponse)
}

export async function singUp(form: RegisterForm): Promise<IUserInfo> {
  return httpPost<IResponse<IUserInfo>>(`/auth/signUp`, form)
    .then(forIResponse)
}

export async function resendEmail(user_id: string, host: string) {
  return httpGet<IResponse<any>>(`/auth/verifyCode/send?user_id=${user_id}&host=${host}`)
    .then(forIResponse).catch(handleError)
}

export async function verifyCode(user_id: string, verification_code: string) {
  return httpGet<IResponse<any>>(`/auth/verify?user_id=${user_id}&verification_code=${verification_code}`)
    .then(forIResponse).catch(handleError)
}

export async function getApiKeys(pageNum = 1, pageSize = 10) {
  return httpGetWithCert<Api[]>(`/auth/apiKeys?pageNum=${pageNum}&pageSize=${pageSize}`)
}

export function createTokenSource(): CancelTokenSource{
  return got.CancelToken.source()
}
export function pinFile(file: File,
                        jwt?: string,
                        onProgress?: (p: number) => void,
                        source?: CancelTokenSource
) {
  console.info('do pinFile---', jwt)
  const form = new FormData()
  form.append('file', file, file.name)
  return wFetch<IPinFile>('/pinning/pinFile', {
    method: 'POST',
    headers: createAuth(jwt),
    data: form,
    onUploadProgress: (p) => {
      const percent = p.loaded / p.total
      if(onProgress) onProgress(percent)
    },
    cancelToken: source?.token
  }).then(res => res.data)
}

export async function getFilesCount() {
  return httpGetWithCert<number>(`/files/count`)
}

export async function getFiles(pageNum = 1, pageSize = 10) {
  return httpGetWithCert<IFile[]>(`/files/list?pageNum=${pageNum}&pageSize=${pageSize}`)
}

export async function changePwd(oPwd: string, nPwd: string) {
  return httpPostWithCert<IResponse<any>>('/auth/resetPassword', {
    newPassword: nPwd,
    oldPassword: oPwd
  })
}

export async function resetPwd(email: string){
  return httpPost('/auth/resetPasswordByEmail', { email })
}

export async function bindGithub(code: string){
  return httpPostWithCert<IResponse<any>>(`/oauth/github/bind?code=${code}`)
}

export async function getUserInfo(){
  return httpGetWithCert<IResponse<IUserInfo>>(`/auth/userInfo`)
    .then(forIResponse)
}

export async function getNeedBindGithubAccount(){
  return httpGetWithCert<IResponse<boolean>>(`/auth/needBindGithubAccount`)
    .then(forIResponse).catch(handleError)
}
export async function requestCode (phone: string) {
  return httpPostWithCert<IResponse<boolean>>(`/auth/code/send?phone=${phone}`)
      .then(forIResponse).catch(handleError)
}
export async function vertifyCode (code: string) {
  return httpPostWithCert<IResponse<boolean>>(`/auth/phone/bind?code=${code}`)
      .then(forIResponse).catch(handleError)
}
const handleError = (error: AxiosError) => {
  if (error.response) {
    throw new Error(error.response.data.Msg)
  } else {
    console.log( "Error", error.message );
  }
}
// Captcha get image
export async function getPicture(params: any) {
  return wFetch('/captcha/get',{
    method: 'POST',
    data: params,
    withCredentials: true,
    timeout: 40000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json; charset=UTF-8'
    },
  }).then(res => res.data);
}
// Captcha check
export async function reqCheck(params: any) {
  return wFetch('/captcha/check',{
    method: 'POST',
    data: params,
    withCredentials: true,
    timeout: 40000,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/json; charset=UTF-8'
    },
  }).then(res => res.data);
}
