import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/hospital',
      component: () => import('@/views/hospital/index.vue'),
      redirect: '/hospital/reservation',
      children: [
        {
          path: 'reservation',
          component: () => import('@/views/hospital/reservation/index.vue')
        },
        {
          path: 'detail',
          component: () => import('@/views/hospital/detail/index.vue')
        },
        {
          path: 'notice',
          component: () => import('@/views/hospital/notice/index.vue')
        },
        {
          path: 'close',
          component: () => import('@/views/hospital/close/index.vue')
        },
        {
          path: 'search',
          component: () => import('@/views/hospital/search/index.vue')
        },
        {
          path: 'register',
          component: () => import('@/views/hospital/reservation/RegisterView.vue')
        },
        {
          path: 'visitor',
          component: () => import('@/views/hospital/reservation/VisitorInfo.vue')
        },
        {
          path: 'addvisitor',
          component: () => import('@/views/hospital/reservation/AddVisitor.vue')
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
          component: () => import('@/views/user/certification/index.vue')
        },
        {
          path: 'order',
          component: () => import('@/views/user/order/index.vue')
        },
        {
          path: 'infomation',
          component: () => import('@/views/user/infomation/index.vue')
        },
        {
          path: 'account',
          component: () => import('@/views/user/account/index.vue')
        },
        {
          path: 'feedback',
          component: () => import('@/views/user/feedback/index.vue')
        },
        {
          path: 'register',
          component: () => import('@/views/hospital/reservation/RegisterView.vue')
        },
        {
          path: 'visitor',
          component: () => import('@/views/hospital/reservation/VisitorInfo.vue')
        },
        {
          path: 'addvisitor',
          component: () => import('@/views/hospital/reservation/AddVisitor.vue')
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

export default router
