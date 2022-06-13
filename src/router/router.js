import { createRouter, createWebHistory } from "vue-router";

// 路由信息
const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import('../pages/home.vue'),
  },
  {
    path: "/faq",
    name: "Faq",
    component: () => import('../pages/faq.vue'),
  }
];

// 导出路由
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
