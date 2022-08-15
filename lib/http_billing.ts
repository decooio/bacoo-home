import {httpGet, httpGetWithCert, httpPostWithCert} from "./http";

export interface Meta {
  "createTime": string,
  "currency": string,
  "deleted": number,
  "desc": string,
  "id": number,
  "lastUpdateTime": string,
  "metaType": number,
  "name": string,
  "period": number,
  "price": number,
  "size": number
}

export interface Order {
  "amount": number,
  "createTime": string,
  "currency": string,
  "expireTime": string,
  "id": number,
  "lastUpdateTime": string,
  "metaDataId": number,
  "orderStatus": number,
  "orderType": number,
  "paidTime": string,
  "payType": number,
  "startTime": string,
  "tradeNo": string,
  "userId": number
}

export interface PlanDetails {
  "createTime": string,
  "expireTime": string,
  "id": number,
  "lastUpdateTime": string,
  "lastBillingPlanOrderId": string,
  "maxSize": number,
  "usedSize": number,
  "userId": number,
}

export async function getOrderCount() {
  return httpGetWithCert<number>('/billing/user/order/count')
}

export async function getOrders(pageNum = 1, pageSize = 10) {
  return httpGetWithCert<Order[]>(`/billing/user/order/list?pageNum=${pageNum}&pageSize=${pageSize}`)
}

// 0:upgrade  1: renew
export async function createPayOrder(metaId: number, orderType: 'Upgrade' | 'Renew') {
  return httpPostWithCert<Order>(`/billing/user/order/create?metaDataId=${metaId}&orderType=${orderType}`)
}

export async function getOrder(orderId: number){
  return httpGetWithCert<Order>(`/billing/user/order/${orderId}`)
}
export async function confirmPayOrder(orderId: number) {
  return httpPostWithCert<IResponse<any>>(`/billing/user/order/crust/confirm?orderId=${orderId}`)
}

export async function cancelPayOrder(orderId: number) {
  return httpPostWithCert<IResponse<any>>(`/billing/user/order/crust/cancel?orderId=${orderId}`)
}
export async function getMetaList() {
  return httpGetWithCert<Meta[]>(`/billing/metadata/user/list`)
}

export async function getUpgrade(metaId: number) {
  return httpGetWithCert<Meta>(`/billing/metadata/user/upgrade/${metaId}`)
}


export async function getPlanDetails(){
  return httpGetWithCert<PlanDetails>(`/billing/user/plan/details`)
}

export async function getCrustAccount(){
  return httpPostWithCert<IUserInfo>(`/auth/crust/account`)
}

export async function getCommonMetaList(){
  return httpGet<Meta[]>(`/billing/metadata/common/list`)
}

export async function beneficiaryAddress(beneficiaryAddress: string){
  return httpPostWithCert(`/auth/crust/beneficiary/address`, {
    beneficiaryAddress
  })
}
