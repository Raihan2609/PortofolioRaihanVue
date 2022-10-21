import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('../views/DetailProject.vue'),
      props: true,
    },
  ],
});

export default router;
