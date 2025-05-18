// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "@/layouts/AppLayout.vue";

const routes = [
  {
    path: "/",
    name: "appLayout",
    component: AppLayout,
    children: [
      {
        path: "",
        name: "welcomeLayout",
        component: () => import("@/layouts/WelcomeLayout.vue"), // Lazy loading
        children: [
          {
            path: "",
            name: "welcome",
            component: () => import("@/views/WelcomeView.vue"), // Lazy loading
          },
        ],
      },
      {
        path: "content",
        name: "content",
        component: () => import("@/layouts/ContentLayout.vue"), // Lazy loading
        children: [
          {
            path: "",
            name: "home",
            component: () => import("@/views/HomeView.vue"), // Lazy loading
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
