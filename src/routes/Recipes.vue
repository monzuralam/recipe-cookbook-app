<script setup>
import RecipeItem from "../components/Recipe/RecipeItem.vue";
import { useRecipes } from "../stores/recipes";
// retrive id
const url = window.location.pathname;
const id = url.substring(url.lastIndexOf("/") + 1);
// get data from store
const recipeStore = useRecipes();
const recipe = recipeStore.recipe;
const currentRecipes = recipe.filter((recipe) => recipe.category == id);
</script>
<template>
  <div class="container h-screen py-16 dark:bg-black">
    <RecipeItem
      v-for="currentRecipe in currentRecipes"
      :key="currentRecipe.id"
      :recipe="currentRecipe"
    />
  </div>
</template>
<style scoped></style>
