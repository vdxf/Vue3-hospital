import { createRouter, createWebHistory } from 'vue-router'
import pinia from '@/stores'
import useUserStore from '@/stores/modules/user'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
const UserStore = useUserStore(pinia)

Nprogress.configure({ showSpinner: false })
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('@/views/home/index.vue'),
      meta: { title: '首页' }
    },
    {
      path: '/hospital',
      component: () => import('@/views/hospital/index.vue'),
      redirect: '/hospital/reservation',
      children: [
        {
          path: 'reservation',
          component: () => import('@/views/hospital/reservation/index.vue'),
          meta: { title: '预约挂号' }
        },
        {
          path: 'detail',
          component: () => import('@/views/hospital/detail/index.vue'),
          meta: { title: '医院详情' }
        },
        {
          path: 'notice',
          component: () => import('@/views/hospital/notice/index.vue'),
          meta: { title: '预约通知' }
        },
        {
          path: 'close',
          component: () => import('@/views/hospital/close/index.vue'),
          meta: { title: '停诊信息' }
        },
        {
          path: 'search',
          component: () => import('@/views/hospital/search/index.vue'),
          meta: { title: '查询' }
        },
        {
          path: 'register',
          component: () => import('@/views/hospital/reservation/RegisterView.vue'),
          meta: { title: '预约第一步' }
        },
        {
          path: 'visitor',
          component: () => import('@/views/hospital/reservation/VisitorInfo.vue'),
          meta: { title: '预约第二步' }
        }
      ]
    },
    {
      path: '/user',
      component: () => import('@/views/user/index.vue'),
      redirect: '/user/certification',
      children: [
        {
          path: 'certification',
          component: () => import('@/views/user/certification/index.vue'),
          meta: { title: '实名认证' }
        },
        {
          path: 'order',
          component: () => import('@/views/user/order/index.vue'),
          meta: { title: '预约订单' }
        },
        {
          path: 'infomation',
          component: () => import('@/views/user/infomation/index.vue'),
          meta: { title: '就诊人管理' }
        },
        {
          path: 'account',
          component: () => import('@/views/user/account/index.vue'),
          meta: { title: '账号信息' }
        },
        {
          path: 'feedback',
          component: () => import('@/views/user/feedback/index.vue'),
          meta: { title: '信息反馈' }
        }
      ]
    }
  ],
  scrollBehavior() {
    return {
      left: 0,
      top: 0
    }
  }
})
const arr = [
  '/home',
  '/hospital/reservation',
  '/hospital/detail',
  '/hospital/notice',
  '/hospital/close',
  '/hospital/search'
]
router.beforeEach((to, from, next) => {
  Nprogress.start()
  const token = UserStore.userInfo.token

  if (token) {
    next()
  } else {
    // 未登录
    if (arr.includes(to.path)) {
      next()
    } else {
      UserStore.LoginShow = true
      next({
        path: '/home',
        query: {
          redirect: to.fullPath
        }
      })
    }
  }
})
router.afterEach((to, from) => {
  const { title } = to.meta || {}
  document.title = `${title}` || '医院'
  Nprogress.done()
})
export default router
