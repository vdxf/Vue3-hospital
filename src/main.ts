import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
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

const app = createApp(App)
app.use(createPinia())
app.use(router)

app.use(ElementPlus, {
  locale: zhCn
})
app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)

app.mount('#app')
