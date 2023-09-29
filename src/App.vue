<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="max-w-sm max-h-screen mx-auto overflow-y relative">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<style scoped></style>
