import type { HospitalDetail, DepartmentArr, UserInfo } from '@/api/hospital/type'

export interface DetailState {
  hospitalData: HospitalDetail
  departmentArr: DepartmentArr
}
export interface UserState {
  LoginShow: boolean
  code: string
  userInfo: UserInfo
}
