<script setup>
import "@fontsource/hind-siliguri/500.css";
import DarkMode from "./../components/Settings/DarkMode.vue";
</script>

<template>
  <div class="container h-screen py-16 dark:bg-black">
    <div class="mb-5">
      <img
        src="../assets/favicon.png"
        alt="Recipe Cookbook"
        class="w-1/5 mx-auto mt-2 mb-5"
      />
      <h2 class="text-xl font-medium text-center dark:text-white">
        রেসিপি কুকবুক অ্যাপ
      </h2>
    </div>
    <DarkMode />
  </div>
</template>

<style scoped></style>
