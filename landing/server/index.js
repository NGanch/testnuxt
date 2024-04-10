import { createRouter, createWebHistory } from 'vue-router';
import Landing from '../pages/landing.vue';

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  // Інші маршрути тут, якщо потрібно
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;