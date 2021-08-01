import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import BProject from "../views/BProject.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/project/:id",
    name: "project",
    component: BProject,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
