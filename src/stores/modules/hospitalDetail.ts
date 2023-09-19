import { defineStore } from 'pinia'
import { reqHospitalDetail, reqDepartmentList } from '@/api/hospital'
import type {
  HospitalDetail,
  HospitalDetailResponse,
  DepartmentResponse
} from '@/api/hospital/type'
import type { DetailState } from './type'
const useDetailStore = defineStore('Detail', {
  state: (): DetailState => {
    return {
      hospitalData: {} as HospitalDetail,
      departmentArr: []
    }
  },
  actions: {
    async getHospital(hoscode: string) {
      const res: HospitalDetailResponse = await reqHospitalDetail(hoscode)
      if (res.code === 200) {
        this.hospitalData = res.data
      }
    },
    async getDeparment(hoscode: string) {
      const res: DepartmentResponse = await reqDepartmentList(hoscode)
      if (res.code === 200) {
        this.departmentArr = res.data
      }
    }
  },
  getters: {}
})
export default useDetailStore
