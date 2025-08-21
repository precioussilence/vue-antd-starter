import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue'),
      meta: { layout: 'main', title: '首页', icon: 'i-carbon-home' },
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login.vue'),
      meta: { layout: 'auth', title: '登录', icon: 'i-mdi-login' },
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/Register.vue'),
      meta: { layout: 'auth', title: '注册', icon: 'i-mdi-account-plus' },
    },
    {
      path: '/unauthorized',
      name: 'Unauthorized',
      component: () => import('@/views/403.vue'),
      meta: { layout: 'main', title: '无权限' },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/404.vue'),
      meta: { layout: 'main', title: '页面未找到', icon: 'i-carbon-warning-alt' },
    },

  ],
})

export default router
