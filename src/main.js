import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";

import Home from "./routes/Home.vue";
import Tips from "./routes/Tips.vue";
import Favorite from "./routes/Favorite.vue";
import Settings from "./routes/Settings.vue";
import Errors from "./routes/Errors.vue";
import Recipes from "./routes/Recipes.vue";

import "./style.css";
import App from "./App.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/tips/",
    component: Tips,
  },
  {
    path: "/favorite/",
    component: Favorite,
  },
  {
    path: "/settings",
    component: Settings,
  },
  {
    path: "/recipes/:id",
    component: Recipes,
  },
  {
    path: "/:pathMatch(.*)*",
    component: Errors,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount("#app");
