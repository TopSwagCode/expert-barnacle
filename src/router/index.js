import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/homeView.vue";
import About from "@/views/aboutView.vue";
import Vue from "@/views/vueView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/vue",
    name: "Vue",
    component: Vue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;