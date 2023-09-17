//首页模块接口
import request from '@/utils/request'
import type { HospitalResponseData } from './type'

enum API {
  HOSPITAL_URL = '/hosp/hospital/'
}
export const reqHospital = (page: number, limit: number) => {
  return request.get<any, HospitalResponseData>(API.HOSPITAL_URL + `${page}/${limit}`)
}
