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
    {
      path: '/profile',
      name: 'Profile',
      component: () => import("../views/ProfileView.vue"),
      meta: {
        isSecured: true,
      },
    },
  ]
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');

  if (to.meta.isSecured && !token) {
    next('/');
  }

  if (!to.meta.isSecured && token) {
    next('/profile');
  }

  next();
});

export default router
