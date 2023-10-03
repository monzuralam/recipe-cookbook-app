<script setup>
import "@fontsource/hind-siliguri/600.css";
import { useRoute } from "vue-router";
const route = useRoute();
// retrive id
const url = window.location.pathname;
const id = url.substring(url.lastIndexOf("/") + 1);

// recipe store
import { useRecipes } from "../stores/recipes";
const recipeStore = useRecipes();
const recipes = recipeStore.recipe;
const recipe = recipes.find((recipes) => recipes.id == id);
</script>
<template>
  <header class="bg-white dark:bg-black fixed max-w-sm w-full top-0 py-1 mb-2">
    <h1
      v-if="route.name != 'recipe'"
      class="text-black dark:text-white text-3xl leading-normal font-semibold text-center"
    >
      রেসিপি কুকবুক অ্যাপ
    </h1>
    <div class="flex items-center p-1.5 mb-2.5" v-if="route.name == 'recipe'">
      <router-link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 stroke-black dark:stroke-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </router-link>
      <div class="flex items-center mx-auto">
        <h3
          id="top-title"
          class="text-xl font-normal leading-normal text-center text-black dark:text-white"
        >
          {{ recipe.title }}
        </h3>
      </div>
      <div v-if="route.name == 'recipe'" class="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 dark:stroke-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </div>
    </div>
  </header>
</template>
