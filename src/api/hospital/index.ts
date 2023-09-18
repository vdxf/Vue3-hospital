import request from '@/utils/request'
import type { HospitalDetailResponse } from './type'

export const reqHospitalDetail = (hoscode: string) => {
  return request.get<any, HospitalDetailResponse>('/hosp/hospital/' + hoscode)
}
