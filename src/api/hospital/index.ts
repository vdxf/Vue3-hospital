import request from '@/utils/request'
import type {
  HospitalDetailResponse,
  DepartmentResponse,
  LoginData,
  UserLoginResponse
} from './type'
//获取医院信息
export const reqHospitalDetail = (hoscode: string) => {
  return request.get<any, HospitalDetailResponse>('/hosp/hospital/' + hoscode)
}

//获取某个医院科室列表
export const reqDepartmentList = (hoscode: string) => {
  return request.get<any, DepartmentResponse>('/hosp/hospital/department/' + hoscode)
}
//获取验证码
export const reqCode = (phone: string) => {
  return request.get<any>('/sms/send/' + phone)
}
//登录
export const reqLogin = (data: LoginData) => {
  return request.post<any, UserLoginResponse>('/user/login/', data)
}
