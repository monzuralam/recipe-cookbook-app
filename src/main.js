import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";

import Home from "./routes/Home.vue";
import Tips from "./routes/Tips.vue";
import Favorite from "./routes/Favorite.vue";
import Settings from "./routes/Settings.vue";
import Errors from "./routes/Errors.vue";
import Recipes from "./routes/Recipes.vue";
import Recipe from "./routes/Recipe.vue";

import "./style.css";
import App from "./App.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/tips/",
    name: "tips",
    component: Tips,
  },
  {
    path: "/favorite/",
    name: "favorite",
    component: Favorite,
  },
  {
    path: "/settings",
    name: "settings",
    component: Settings,
  },
  {
    path: "/recipes/:id",
    name: "recipes",
    component: Recipes,
  },
  {
    path: "/recipes/recipe/:id",
    name: "recipe",
    component: Recipe,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "errors",
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
