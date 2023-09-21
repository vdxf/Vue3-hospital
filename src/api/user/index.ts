import request from '@/utils/request'
import type {
  SubmitOrder,
  OrderResponse,
  QrCodeResponse,
  PayResult,
  UserInfoResponse,
  CertationTypeResponse,
  Authentication,
  OrderListResponse,
  AllVisitorResponse,
  AllOrderStatusResponse
} from './type'

//创建订单
export const reqOrder = (hoscode: string, scheduleId: string, patientId: string) => {
  return request.get<any, SubmitOrder>(
    '/order/orderInfo/auth/submitOrder/' + `${hoscode}/${scheduleId}/${patientId}`
  )
}
//获取订单详情
export const reqOrderDetail = (orderId: string) => {
  return request.get<any, OrderResponse>('/order/orderInfo/auth/getOrderInfo/' + `${orderId}`)
}
//取消预约
export const reqDeleteOrder = (orderId: string) => {
  return request.get<any, any>('/order/orderInfo/auth/cancelOrder/' + `${orderId}`)
}
//获取微信支付二维码
export const reqQrCode = (orderId: string) => {
  return request.get<any, QrCodeResponse>('/order/weixin/createNative/' + `${orderId}`)
}
//查询支付状态
export const reqPayResult = (orderId: string) => {
  return request.get<any, PayResult>('/order/weixin/queryPayStatus/' + `${orderId}`)
}
//获取当前帐号信息
export const reqUserInfo = () => {
  return request.get<any, UserInfoResponse>('/user/auth/getUserInfo')
}
//获取证件类型
export const reqCertationType = (CertificatesType = 'CertificatesType') => {
  return request.get<any, CertationTypeResponse>('/cmn/dict/findByDictCode/' + CertificatesType)
}
//认证
export const reqAuthentication = (data: Authentication) => {
  return request.post<any, any>('/user/auth/userAuah', data)
}
//获取订单列表
export const reqOrderList = (
  page: number,
  limit: number,
  patientId?: string,
  orderStatus?: string
) => {
  return request.post<any, OrderListResponse>(
    '/order/orderInfo/auth/' + `${page}/${limit}?patientId=${patientId}&orderStatus=${orderStatus}`
  )
}
//获取全部就诊人列表
export const reqAllVisitor = () => {
  return request.get<any, AllVisitorResponse>('/user/patient/auth/findAll')
}
//获取全部订单状态
export const reqOrderState = () => {
  return request.get<any, AllOrderStatusResponse>('/order/orderInfo/auth/getStatusList')
}
