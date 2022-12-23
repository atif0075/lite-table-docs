import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    meta: { title: "Home" },
    component: () => import("../pages/index.vue"),
  },
  {
    path: "/get-started",
    meta: { title: "Documentation" },
    component: () => import("../layout/default.vue"),
    children: [
      {
        path: "/quick-start",
        meta: { title: "Quick Start" },
        component: () => import("../pages/quick-start/quick-start.vue"),
      },
      {
        path: "/usage",
        meta: { title: "Usage" },
        component: () => import("../pages/usage/usage.vue"),
      },
      {
        path: "/api-reference",
        meta: { title: "API Reference" },
        component: () => import("../pages/api-ref/api-ref.vue"),
      },
      {
        path: "/simple-examples",
        meta: { title: "Simple Examples" },
        component: () => import("../pages/simple-examples/simple-examples.vue"),
      },
      {
        path: "/advance-examples",
        meta: { title: "Advance Examples" },
        component: () =>
          import("../pages/advance-examples/advance-examples.vue"),
      },
    ],
  },

];
const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: "border-l-4 border-green bg-secondary",
  scrollBehavior(to) {
    if (to.hash) {
      document.querySelector(to.hash)?.scrollIntoView(true);
    }
  },
});

export default router;
