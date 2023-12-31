import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import pinia from '@/stores'

import './assets/js/flexible.js'
import './assets/sass/global.scss'
import '@/assets/icon/iconfont.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

//引入全局组件
import HospitalTop from '@/components/hospital_top/index.vue'
import HospitalBottom from '@/components/hospital_bottom/index.vue'
import Login from '@/components/Login/index.vue'

const app = createApp(App)

app.use(router)
app.use(ElementPlus, {
  locale: zhCn
})
app.use(pinia)
app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)
app.component('Login', Login)

app.mount('#app')
