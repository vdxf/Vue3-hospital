//首页模块接口
import request from '@/utils/request'
import type {
  HospitalLevelAndRegionResponse,
  HospitalResponseData,
  HospitalSearchInfo
} from './type'

//获取医院数据
export const reqHospital = (page: number, limit: number, hostype = '', districtCode = '') => {
  return request.get<any, HospitalResponseData>(
    '/hosp/hospital/' + `${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}`
  )
}
//获取医院等级与地区数据
export const reqLevelAndRegion = (dictCode: string) => {
  return request.get<any, HospitalLevelAndRegionResponse>('/cmn/dict/findByDictCode/' + dictCode)
}
//搜索
export const reqSearch = (hostname: string) => {
  return request.get<any, HospitalSearchInfo>('/hosp/hospital/findByHosname/' + hostname)
}
