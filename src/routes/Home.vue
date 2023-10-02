<script setup>
import "@fontsource/hind-siliguri/500.css";
import Category from "../components/Category.vue";
import { useRecipes } from "../stores/recipes";
const recipeStore = useRecipes();
const categories = recipeStore.category;
</script>

<template>
  <div class="container h-screen overflow-y-scroll py-16 dark:bg-black">
    <div class="grid grid-cols-2 gap-2">
      <Category
        v-for="category in categories"
        :key="category.id"
        :data="category"
      />
    </div>
  </div>
</template>
