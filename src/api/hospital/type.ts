export interface ResponseData {
  code: number
  messsage: string
  ok: boolean
}
export interface HospitalDetail {
  bookingRule: {
    cycle: number
    releaseTime: string
    stopTime: string
    quitDay: number
    quitTime: string
    rule: []
  }
  hospital: {
    id: string
    createTime: string
    updateTime: string
    isDeleted: number
    param: {
      hostypeString: string
      fullAddress: string
    }
  }
  hoscode: string
  hosname: string
  hostype: string
  provinceCode: string
  cityCode: string
  districtCode: string
  address: string
  logoData: string
  intro: null
  route: string
  status: number
}

export interface HospitalDetailResponse extends ResponseData {
  data: HospitalDetail
}
