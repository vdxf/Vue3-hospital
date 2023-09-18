//定义首页模块ts类型
export interface ResponseData {
  code: number
  messsage: string
  ok: boolean
}
//已有的医院数据的ts类型
export interface Hospital {
  id: string
  createTime: string
  updateTime: string
  isDeleted: number
  param: {
    hostypeString: string
    fullAddress: string
  }
  hoscode: string
  hosname: string
  hostype: string
  provinceCode: string
  cityCode: string
  districtCode: string
  address: string
  logoData: string
  intro: string
  route: string
  status: number
  bookingRule: {
    cycle: number
    releaseTime: string
    stopTime: string
    quitDay: number
    quitTime: string
    rule: string
  }
}
export type Content = Hospital[]

//医院接口返回的数据ts类型
export interface HospitalResponseData extends ResponseData {
  data: {
    content: Content
    pageable: {
      sort: {
        sorted: boolean
        unsorted: boolean
        empty: boolean
      }
      pageNumber: number
      pageSize: number
      offset: number
      paged: boolean
      unpaged: boolean
    }
    totalPages: number
    totalElements: number
    last: boolean
    first: boolean
    sort: {
      sorted: boolean
      unsorted: boolean
      empty: boolean
    }
    numberOfElements: number
    size: number
    number: number
    empty: boolean
  }
}

//医院等级与地区数据ts类型
export interface HospitalLevelAndRegion {
  id: number
  createTime: string
  updateTime: string
  isDeleted: number
  param: {}
  parentId: number
  name: string
  value: string
  dictCode: string
  hasChildren: boolean
}
export type HospitalLevelAndRegionArr = HospitalLevelAndRegion[]

//医院等级与地区返回数据ts类型
export interface HospitalLevelAndRegionResponse extends ResponseData {
  data: HospitalLevelAndRegionArr
}
//搜索返回数据ts类型
export interface HospitalSearchInfo extends ResponseData {
  data: Content
}
