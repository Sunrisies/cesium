import { createWebHistory , createRouter } from "vue-router";


const router = createRouter({
  history: createWebHistory (),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/Camera",
      name: "Camera",
      component: () => import("@/views/Camera.vue"),
    },
    {
      path: "/TerrainProvider",
      name: "TerrainProvider",
      component: () => import("@/views/TerrainProvider.vue"),
    }
  ],
});

export default router;