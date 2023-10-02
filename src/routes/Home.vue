<script setup>
import "@fontsource/hind-siliguri/500.css";
</script>

<template>
  <div class="container h-screen overflow-y-scroll py-16 dark:bg-black">
    <div class="grid grid-cols-2 gap-2">
      <!-- category item start here -->
      <div class="rounded-md border">
        <router-link to="/recipes/1">
          <img
            src="../assets/images/category/biriyani.jpg"
            alt="Recipe"
            class="rounded-t-md max-w-full h-28 object-cover"
          />
          <h3
            class="text-lg font-medium leading-normal text-center dark:text-white py-1.5"
          >
            বিরিয়ানি রেসিপি
          </h3>
        </router-link>
      </div>
      <!-- category item stop here -->
    </div>
  </div>
</template>
