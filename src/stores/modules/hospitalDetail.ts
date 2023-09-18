import { defineStore } from 'pinia'
import { reqHospitalDetail } from '@/api/hospital'
import type { HospitalDetailResponse } from '@/api/hospital/type'
import type { HospitalDetail } from '@/api/hospital/type'
import type { DetailState } from './type'
const useDetailStore = defineStore('Detail', {
  state: (): DetailState => {
    return {
      hospitalData: {} as HospitalDetail
    }
  },
  actions: {
    async getHospital(hoscode: any) {
      const res: HospitalDetailResponse = await reqHospitalDetail(hoscode)
      if (res.code === 200) {
        this.hospitalData = res.data
      }
    }
  },
  getters: {}
})
export default useDetailStore
