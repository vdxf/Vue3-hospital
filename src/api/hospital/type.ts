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

export interface Department {
  depcode: string
  depname: string
  children?: Department[]
}
export type DepartmentArr = Department[]
export interface DepartmentResponse extends ResponseData {
  data: DepartmentArr
}

export interface LoginData {
  phone: string
  code: string
}
export interface UserInfo {
  name: string
  token: string
}
export interface UserLoginResponse extends ResponseData {
  data: UserInfo
}

export interface BaseMap {
  workDateString: string
  releaseTime: string
  bigname: string
  stopTime: string
  depname: string
  hosname: string
}
export interface WorkData {
  workDate: string
  workDateMd: string
  dayOfWeek: string
  docCount: number
  reservedNumber: null
  availableNumber: number
  status: number
}
export type BookingScheduleList = WorkData[]
export interface RegisterResponse extends ResponseData {
  data: {
    total: number
    bookingScheduleList: BookingScheduleList
    baseMap: BaseMap
  }
}

export interface Doctor {
  id: string
  createTime: string
  updateTime: string
  isDeleted: number
  param: {
    dayOfWeek: string
    depname: string
    hosname: string
  }
  hoscode: string
  depcode: string
  title: string
  docname: string
  skill: string
  workDate: string
  workTime: number
  reservedNumber: number
  availableNumber: number
  amount: number
  status: number
  hosScheduleId: string
}
export type DoctorArr = Doctor[]
export interface DoctorResponse extends ResponseData {
  data: DoctorArr
}

//就诊人信息
export interface Visitor {
  id: number
  createTime: string
  updateTime: string
  isDeleted: number
  param: {
    certificatesTypeString: string
    contactsCertificatesTypeString: string
    cityString: null
    fullAddress: string
    districtstring: null
    provincestring: null
  }
  userId: number
  name: number
  certificatesType: string
  certificatesNo: string
  sex: string
  birthdate: string
  phone: string
  isMarry: number
  provinceCode: null
  cityCode: null
  districtCOde: null
  address: string
  contactsName: string
  contactsCertificatesType: string
  contactsCertificatesNo: string
  contactsPhone: string
  isInsure: number
  cardNo: null
  status: string
}

export type VisitorArr = Visitor[]
export interface VisitorResponse extends ResponseData {
  data: VisitorArr
}

//挂号医生数据
export interface RegisterDoctor extends ResponseData {
  data: Doctor
}
