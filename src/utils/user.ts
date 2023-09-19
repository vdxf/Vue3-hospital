//本地存储操作用户信息的方法

export const setToken = (userInfo: string) => {
  localStorage.setItem('USERINFO', userInfo)
}
export const getToken = () => {
  return localStorage.getItem('USERINFO')
}
export const removeToken = () => {
  localStorage.removeItem('USERINFO')
}
