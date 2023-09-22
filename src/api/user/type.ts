export interface ResponseData {
  code: number
  message: string
  ok: boolean
}

export interface SubmitOrder extends ResponseData {
  data: number
}
export interface OrderDetail {
  id: number
  createTime: string
  updateTime: string
  isDeleted: number
  param: {
    orderStatusString: string
  }
  userId: number
  outTradeNo: string
  hoscode: string
  hosname: string
  depcode: string
  depname: string
  scheduleId: string
  title: string
  reserveDate: string
  reserveTime: number
  patientId: number
  patientName: string
  patientPhone: string
  hosRecordId: string
  number: number
  fetchTime: string
  fetchAddress: string
  amount: number
  quitTime: string
  orderStatus: number
}
export interface OrderResponse extends ResponseData {
  data: OrderDetail
}

export interface PayInfo {
  codeUrl: string
  orderId: number
  totalFee: number
  resultCode: string
}
export interface QrCodeResponse extends ResponseData {
  data: PayInfo
}
export interface PayResult extends ResponseData {
  data: boolean
}
export interface UserInfo {
  id: number
  createTime: string
  updateTime: string
  isDeleted: number
  param: {}
  openid: null
  nickName: null
  phone: string
  name: string
  certificatesType: string
  certificatesNo: string
  certificatesUrl: null
  authStatus: number
  status: number
}
export interface UserInfoResponse extends ResponseData {
  data: UserInfo
}
//证件类型
export interface CertationType {
  id: number
  createTime: string
  updateTime: string
  isDeleted: number
  param: {}
  parentId: string
  name: string
  value: string
  dictCode: string
  hasChildren: boolean
}
export type CertationTypeArr = CertationType[]
export interface CertationTypeResponse extends ResponseData {
  data: CertationTypeArr
}
//用户认证携带参数
export interface Authentication {
  certificatesNo: string
  certificatesType: string
  certificatesUrl: string
  name: string
}
//订单列表
export interface OrderList {
  id: number
  createTime: string
  updateTime: string
  isDeleted: number
  param: {
    orderStatusString: string
  }
  userId: number
  outTradeNo: string
  hoscode: string
  hosname: string
  depcode: string
  depname: string
  scheduleId: null
  title: string
  reserveDate: string
  reserveTime: number
  patientId: number
  patientName: string
  patientPhone: string
  hosRecordId: string
  number: number
  fetchTime: string
  fetchAddress: string
  amount: number
  quitTime: string
  orderStatus: number
}
export type OrderListArr = OrderList[]
export interface OrderListResponse extends ResponseData {
  data: {
    records: OrderListArr
    total: number
    size: number
    current: number
    orders: []
    hitCount: boolean
    searchCount: boolean
    pages: number
  }
}
//所有就诊人
export interface AllVisitor {
  id: number
  createTime: string
  updateTime: string
  isDeleted: number
  param: {
    certificatesTypeString: string
    contactsCertificatesTypeString: string
    cityString: null
    fullAddress: string
    districtstring: null
    provincestring: null
  }
  userId: number
  name: number
  certificatesType: string
  certificatesNo: string
  sex: number
  birthdate: string
  phone: string
  isMarry: number
  provinceCode: null
  cityCode: null
  districtCOde: null
  address: string
  contactsName: string
  contactsCertificatesType: string
  contactsCertificatesNo: string
  contactsPhone: string
  isInsure: number
  cardNo: null
  status: string
}
export type AllVisitorArr = AllVisitor[]
export interface AllVisitorResponse extends ResponseData {
  data: AllVisitorArr
}
//订单状态
export interface OrderStatus {
  comment: string
  status: number
}
export type AllOrderStatus = OrderStatus[]
export interface AllOrderStatusResponse extends ResponseData {
  data: AllOrderStatus
}
//新增与修改就诊人
export interface AddOrUpdate {
  id?: number
  name: string
  certificatesType: string
  certificatesNo: string
  sex: number
  birthdate: string
  phone: string
  isMarry: number
  isInsure: number
  addressSelected: string[]
  address: string
  contactsName: string
  contactCertificatesType: string
  contactCertificatesNo: string
  contactsPhone: string
}
