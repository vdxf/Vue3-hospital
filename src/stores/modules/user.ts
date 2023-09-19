import { reqCode, reqLogin } from '@/api/hospital'
import { defineStore } from 'pinia'
import { setToken, getToken, removeToken } from '@/utils/user'
import type { LoginData, UserLoginResponse, UserInfo } from '@/api/hospital/type'
import type { UserState } from './type'
const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      LoginShow: false,
      code: '',
      userInfo: JSON.parse(getToken() as string) || ({} as UserInfo)
    }
  },
  actions: {
    async getcode(phone: string) {
      const res: any = await reqCode(phone)
      if (res.code === 200) {
        this.code = res.data
      }
    },
    async getLogin(LoginData: LoginData) {
      const res: UserLoginResponse = await reqLogin(LoginData)
      if (res.code === 200) {
        this.userInfo = res.data
        setToken(JSON.stringify(this.userInfo))
      }
    },
    logout() {
      this.userInfo = { name: '', token: '' }
      removeToken()
    }
  },
  getters: {}
})
export default useUserStore
