import request from '@/utils/request'
import type {
  HospitalDetailResponse,
  DepartmentResponse,
  LoginData,
  UserLoginResponse,
  RegisterResponse,
  DoctorResponse,
  VisitorResponse,
  RegisterDoctor
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
//获取某个科室预约挂号数据
export const reqRegisterList = (page: number, limit: number, hoscode: string, depcode: string) => {
  return request.get<any, RegisterResponse>(
    '/hosp/hospital/auth/getBookingScheduleRule/' + `${page}/${limit}/${hoscode}/${depcode}`
  )
}
//获取某个科室某一天排班数据
export const reqScheduling = (hoscode: string, depcode: string, workDate: string) => {
  return request.get<any, DoctorResponse>(
    '/hosp/hospital/auth/findScheduleList/' + `${hoscode}/${depcode}/${workDate}`
  )
}
//获取就诊人信息
export const reqVisitorData = () => {
  return request.get<any, VisitorResponse>('/user/patient/auth/findAll')
}
//获取医生信息
export const reqDoctorData = (doctorId: string) => {
  return request.get<any, RegisterDoctor>('/hosp/hospital/getSchedule/' + doctorId)
}
