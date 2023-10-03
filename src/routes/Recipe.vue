<script setup>
// retrive id
const url = window.location.pathname;
const id = url.substring(url.lastIndexOf("/") + 1);
// recipe store
import { useRecipes } from "../stores/recipes";
const recipeStore = useRecipes();
const recipes = recipeStore.recipe;
const recipe = recipes.find((recipes) => recipes.id == id);
const img = recipe?.img;
const title = recipe?.title;
const content = recipe?.content;
</script>

<template>
  <div class="container h-screen py-16 recipe dark:bg-black overflow-y-scroll">
    <img :src="img" :alt="title" class="max-w-full w-full mb-5 max-h-52" />
    <h2 class="text-2xl font-medium dark:text-white mb-2">
      {{ title }}
    </h2>
    <p>| {{ recipe?.time }} | {{ recipe?.people }} |</p>
    <div v-html="content"></div>
  </div>
</template>

<style scoped>
.recipe p {
  @apply text-base;
  @apply mb-1;
  @apply dark:text-white;
}

/* scrollbar */
.recipe {
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
}

.dark .recipe {
  scrollbar-color: #fff transparent;
}
</style>
