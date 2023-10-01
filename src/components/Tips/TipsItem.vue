<script setup>
/**
 * Current Text on click
 */
const extractText = (el) => {
  const currentElement = el?.target?.parentElement;
  const currentParentElement = currentElement?.parentElement;
  const currentParentUpperElement = currentParentElement?.parentElement;
  const currentText = currentParentUpperElement?.firstChild?.innerText;
  return currentText;
};

/**
 * Copy clipboard text
 * @param {string} el
 */
const copyClipboardText = (el) => {
  const copyText = extractText(el);
  navigator.clipboard.writeText(copyText);
};

/**
 * share text
 * @param {string} el
 */
const shareTipsText = async (el) => {
  const currentShareText = extractText(el);
  const shareData = {
    text: currentShareText,
  };

  if (navigator.share && navigator.canShare(shareData)) {
    navigator.share(shareData);
  }
};
</script>
<template>
  <!-- tips item start here -->
  <div class="border rounded-md shadow mb-2.5">
    <p class="text-base text-center py-2 dark:text-white">
      যথাসম্ভব পাতিলে থাকনা দিয়ে রান্না করুন। এতে করে খাবারের পুষ্টিগুণ ঠিক
      থাকে।
    </p>
    <!-- action start here -->
    <div
      class="flex items-center justify-between bg-gray-100 dark:bg-transparent dark:border-t px-2 py-1"
    >
      <!-- copy start here -->
      <div
        class="flex items-center justify-center cursor-pointer"
        @click="copyClipboardText"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 stroke-black dark:stroke-white mr-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
          />
        </svg>
        <span class="text-sm text-black dark:text-white">কপি</span>
      </div>
      <!-- copy stop here -->
      <!-- share start here -->
      <div
        class="flex items-center justify-center cursor-pointer"
        @click="shareTipsText"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 stroke-black dark:stroke-white mr-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
          />
        </svg>
        <span class="text-sm text-black dark:text-white">শেয়ার</span>
      </div>
      <!-- share stop here -->
    </div>
    <!-- action stop here -->
  </div>
  <!-- tips item stop here -->
</template>
