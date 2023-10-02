<script setup>
const props = defineProps({
  data: Object,
});
const id = props?.data?.id;
</script>

<template>
  <!-- category item start here -->
  <div class="rounded-md border">
    <router-link :to="/recipes/ + id">
      <img
        :src="props?.data?.img"
        :alt="props?.data?.title"
        class="rounded-t-md max-w-full h-28 object-cover"
      />
      <h3
        class="text-lg font-medium leading-normal text-center dark:text-white py-1.5"
      >
        {{ props?.data?.title }}
      </h3>
    </router-link>
  </div>
  <!-- category item stop here -->
</template>

<style scoped></style>
