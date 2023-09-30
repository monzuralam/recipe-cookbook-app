<script setup>
import "@fontsource/hind-siliguri/500.css";
import { ref, onMounted } from "vue";

// life cycle hook
onMounted(() => {
  if (localStorage.getItem("darkMode")) {
    document.documentElement.classList.add("dark");
  }
});

// toggle button
const toggleDarkMode = () => {
  let isDark = localStorage.getItem("darkMode");
  if (isDark) {
    localStorage.removeItem("darkMode");
    document.documentElement.classList.remove("dark");
    console.log("remove");
  } else {
    localStorage.setItem("darkMode", true);
    document.documentElement.classList.add("dark");
    console.log("added");
  }
};
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
    <!-- dark mode start here -->
    <div class="flex justify-between rounded-md border shadow px-2 py-1">
      <div>
        <h3
          class="flex content-center items-center text-lg font-medium dark:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 mr-2 dark:stroke-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
          ডার্ক মোড
        </h3>
      </div>
      <div class="relative flex items-center">
        <label for="darkmode" class="cursor-pointer">
          <input
            type="checkbox"
            name=""
            class="sr-only darkmode"
            id="darkmode"
            @click="toggleDarkMode"
          />
          <div
            class="w-10 h-4 bg-gray-300 dark:bg-white rounded-full shadow-inner"
          ></div>
          <div
            class="dot w-5 h-5 rounded-full shadow bg-black dark:bg-white absolute -left-0 top-1 transition"
          ></div>
        </label>
      </div>
    </div>
    <!-- dark mode stop here -->
  </div>
</template>

<style scoped>
input#darkmode:checked ~ .dot {
  transform: translateX(100%);
  background-color: #fff;
}
</style>
