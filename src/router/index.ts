import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/NotFound.vue'),
      meta: { layout: 'auth' },
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue'),
      meta: { layout: 'main', title: '首页', icon: 'i-carbon-home' },
    },
  ],
})

export default router
