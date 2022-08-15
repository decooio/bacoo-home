export interface Api{
  apiKey: string
  apiSecret: string
  createAt: number
  id: number
  jwt: string
  lastUpdateAt: number
  name: string
  status: number
  userId: number
}

export interface IPinFile{
  PinHash: string,
  PinDate: number,
  PinSize: number,
}
export interface IFile{
  cosUrl: null
  createAt: number
  cumulativeSize: number
  deleteTime?: string
  fileName: string
  folderPinHash?: string
  id: number
  ipfsPinHash: string
  lastUpdateAt: number
  metaData?: string
  orderId?: string
  pinAt: number
  state: number
  thirdParty: number
  userId: number
  uuid: string
}
