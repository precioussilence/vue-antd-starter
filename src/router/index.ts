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
      meta: { layout: 'auth' },
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/Register.vue'),
      meta: { layout: 'auth' },
    },
    {
      path: '/unauthorized',
      name: 'Unauthorized',
      component: () => import('@/views/403.vue'),
      meta: { layout: 'auth', title: '无权限' },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/404.vue'),
      meta: { layout: 'auth' },
    },

  ],
})

export default router
