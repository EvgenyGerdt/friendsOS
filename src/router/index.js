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
      path: '/reset-password',
      name: 'ResetPassword',
      component: () => import("../views/ResetPasswordView.vue"),
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import("../views/user/ProfileView.vue"),
      meta: {
        isSecured: true,
      },
    },
    {
      path: '/messages',
      name: 'Message',
      component: () => import("../views/user/MessagesView.vue"),
      meta: {
        isSecured: true,
      },
    },
    {
      path: '/friends',
      name: 'Friends',
      component: () => import("../views/user/FriendsView.vue"),
      meta: {
        isSecured: true,
      },
    },
    {
      path: '/events',
      name: 'Events',
      component: () => import("../views/user/EventsView.vue"),
      meta: {
        isSecured: true,
      },
    },
    {
      path: '/about',
      name: 'About',
      component: () => import("../views/user/AboutView.vue"),
      meta: {
        isSecured: true,
      },
    },
  ]
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token');

  if (to.meta.isSecured && !isAuthenticated && to.name !== 'Auth') {
    next('/');
  }

  if (!to.meta.isSecured && isAuthenticated) {
    next('/profile');
  }

  next();
});

export default router;
