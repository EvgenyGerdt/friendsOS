import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Auth',
      component: () => import("../views/AuthView.vue"),
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import("../views/RegistrationView.vue"),
    },
  ]
})

export default router
