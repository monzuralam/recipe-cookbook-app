<script setup>
const props = defineProps({
  recipe: Object,
});
const id = props?.recipe?.id;
const title = props?.recipe?.title;
const img = props?.recipe?.img;
</script>

<template>
  <div class="border rounded-md shadow p-1.5 mb-2.5">
    <router-link :to="'/recipes/recipe/' + id" class="flex">
      <img :src="img" :alt="title" class="w-12 h-12 rounded-full" />
      <div class="flex items-center mx-auto">
        <h3
          class="text-xl font-normal leading-normal text-center text-black dark:text-white"
        >
          {{ title }}
        </h3>
      </div>
    </router-link>
  </div>
</template>

<style scoped></style>
