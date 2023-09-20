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
