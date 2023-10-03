<script setup>
import RecipeItem from "../components/Recipe/RecipeItem.vue";
import { useRecipes } from "../stores/recipes";
const recipeStore = useRecipes();
const recipe = recipeStore.recipe;
const currentRecipes = recipe.filter((recipe) => recipe.favorite == true);
</script>

<template>
  <div class="container overflow-y-scroll h-screen py-16 dark:bg-black">
    <RecipeItem
      v-for="currentRecipe in currentRecipes"
      :key="currentRecipe.id"
      :recipe="currentRecipe"
    />
    <RecipeItemError v-show="currentRecipes.length == 0" />
  </div>
</template>

<style scoped></style>
