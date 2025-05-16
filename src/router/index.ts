// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import WelcomeLayout from '@/layouts/WelcomeLayout.vue';
import Welcome from '@/views/WelcomeView.vue';

const routes = [
  {
    path: '/',
    name: 'WelcomeLayout',
    component: WelcomeLayout,
    children:[
      {
        path: '',
        name: 'Welcome',
        component: Welcome,
      }
    ]
  },
/*   {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'), // Lazy loading
  }, */
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;