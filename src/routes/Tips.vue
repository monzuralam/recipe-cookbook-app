<script setup>
import TipsItem from "../components/Tips/TipsItem.vue";
import { useRecipes } from "../stores/recipes";
const recipeStore = useRecipes();
const tipsItem = recipeStore?.tips;
</script>

<template>
  <div class="container overflow-y-scroll h-screen py-16 dark:bg-black">
    <TipsItem v-for="tips in tipsItem" :key="tips?.id" :data="tips" />
  </div>
</template>

<style scoped></style>
