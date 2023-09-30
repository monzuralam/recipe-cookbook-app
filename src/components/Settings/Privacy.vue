<script setup>
import "@fontsource/hind-siliguri/400.css";
import "@fontsource/hind-siliguri/500.css";

const privacyPopup = () => {
  const element = document.getElementById("privacy-popup");
  element.classList.remove("hidden");
  element.classList.add("block");
};

const privacyAccept = () => {
  const element = document.getElementById("privacy-popup");
  element.classList.remove("block");
  element.classList.add("hidden");
};
</script>

<template>
  <div
    class="bg-white dark:bg-black max-w-sm overflow-hidden w-full max-h-screen h-screen absolute top-0 bottom-0 left-0 right-0 hidden my-14 overflow-y-scroll"
    id="privacy-popup"
  >
    <div class="container pb-16">
      <h2 class="text-2xl font-medium text-black dark:text-white">
        প্রাইভেসি পলিসি
      </h2>
      <p class="text-black dark:text-white mb-2">
        মনজুর আলম একটি ফ্রি অ্যাপ হিসেবে রেসিপিকুক অ্যাপ তৈরি করেছেন। এই
        পরিষেবাটি মনজুর আলম দ্বারা বিনা খরচে প্রদান করা হয়েছে এবং এটি ব্যবহার
        করার উদ্দেশ্যে।
      </p>

      <p class="text-black dark:text-white mb-2">
        যদি কেউ আমার পরিষেবা ব্যবহার করার সিদ্ধান্ত নেয় তবে এই পৃষ্ঠাটি
        ব্যক্তিগত তথ্য সংগ্রহ, ব্যবহার এবং প্রকাশের সাথে আমার নীতিগুলি সম্পর্কে
        দর্শকদের জানাতে ব্যবহার করা হয়।
      </p>

      <p class="text-black dark:text-white mb-2">
        আপনি যদি আমার পরিষেবা ব্যবহার করতে চান, তাহলে আপনি এই নীতির সাথে
        সম্পর্কিত তথ্য সংগ্রহ এবং ব্যবহারে সম্মত হন৷ আমি যে ব্যক্তিগত তথ্য
        সংগ্রহ করি তা পরিষেবা প্রদান এবং উন্নত করার জন্য ব্যবহার করা হয়। আমি এই
        গোপনীয়তা নীতিতে বর্ণিত ব্যতীত কারো সাথে আপনার তথ্য ব্যবহার বা শেয়ার
        করব না।
      </p>

      <p class="text-black dark:text-white mb-2">
        এই গোপনীয়তা নীতিতে ব্যবহৃত পদগুলির আমাদের শর্তাবলীর মতোই অর্থ রয়েছে,
        যা রেসিপি কুকবুক অ্যাপে অ্যাক্সেসযোগ্য যদি না এই গোপনীয়তা নীতিতে
        অন্যথায় সংজ্ঞায়িত করা হয়।
      </p>

      <h3 class="text-xl leading-normal font-medium text-black dark:text-white">
        তথ্য সংগ্রহ এবং ব্যবহার
      </h3>

      <p class="text-black dark:text-white mb-2">
        একটি ভাল অভিজ্ঞতার জন্য, আমাদের পরিষেবা ব্যবহার করার সময়, আমি আপনাকে
        কিছু ব্যক্তিগতভাবে শনাক্তযোগ্য তথ্য প্রদান করতে চাই। আমি যে তথ্যের
        অনুরোধ করব তা আপনার ডিভাইসে রাখা হবে এবং আমার দ্বারা কোনোভাবেই সংগ্রহ
        করা হবে না।
      </p>

      <p class="text-black dark:text-white mb-2">
        অ্যাপটি তৃতীয় পক্ষের পরিষেবাগুলি ব্যবহার করে যা আপনাকে সনাক্ত করতে
        ব্যবহৃত তথ্য সংগ্রহ করতে পারে।
      </p>

      <p class="text-black dark:text-white mb-2">
        অ্যাপ দ্বারা ব্যবহৃত তৃতীয় পক্ষের পরিষেবা প্রদানকারীদের গোপনীয়তা নীতির
        লিঙ্ক গুগল প্লে পরিষেবা
      </p>

      <h3 class="text-xl leading-normal font-medium text-black dark:text-white">
        লগ ডেটা
      </h3>

      <p class="text-black dark:text-white mb-2">
        আমি আপনাকে জানাতে চাই যে আপনি যখনই আমার পরিষেবা ব্যবহার করেন, অ্যাপে
        কোনও ত্রুটির ক্ষেত্রে আমি লগ ডেটা নামক আপনার ফোনে ডেটা এবং তথ্য
        (তৃতীয়-পক্ষের পণ্যের মাধ্যমে) সংগ্রহ করি। এই লগ ডেটাতে আপনার ডিভাইসের
        ইন্টারনেট প্রোটোকল (“IP”) ঠিকানা, ডিভাইসের নাম, অপারেটিং সিস্টেম
        সংস্করণ, আমার পরিষেবা ব্যবহার করার সময় অ্যাপের কনফিগারেশন, আপনার
        পরিষেবা ব্যবহারের সময় এবং তারিখ এবং অন্যান্য পরিসংখ্যানের মতো তথ্য
        অন্তর্ভুক্ত থাকতে পারে
      </p>

      <h3 class="text-xl leading-normal font-medium text-black dark:text-white">
        কুকিজ
      </h3>

      <p class="text-black dark:text-white mb-2">
        কুকিজ হল অল্প পরিমাণ ডেটা সহ ফাইল যা সাধারণত বেনামী অনন্য শনাক্তকারী
        হিসাবে ব্যবহৃত হয়। আপনি যে ওয়েবসাইটগুলি দেখেন সেগুলি থেকে এগুলি আপনার
        ব্রাউজারে পাঠানো হয় এবং আপনার ডিভাইসের অভ্যন্তরীণ মেমরিতে সংরক্ষণ করা
        হয়৷
      </p>

      <p class="text-black dark:text-white mb-2">
        এই পরিষেবাটি এই "কুকিজ" স্পষ্টভাবে ব্যবহার করে না। যাইহোক, অ্যাপটি
        তৃতীয় পক্ষের কোড এবং লাইব্রেরি ব্যবহার করতে পারে যেগুলি তথ্য সংগ্রহ
        করতে এবং তাদের পরিষেবাগুলি উন্নত করতে "কুকিজ" ব্যবহার করে। আপনার কাছে এই
        কুকিগুলি গ্রহণ বা প্রত্যাখ্যান করার এবং আপনার ডিভাইসে কখন একটি কুকি
        পাঠানো হচ্ছে তা জানার বিকল্প রয়েছে৷ আপনি যদি আমাদের কুকিজ প্রত্যাখ্যান
        করতে চান, তাহলে আপনি এই পরিষেবার কিছু অংশ ব্যবহার করতে পারবেন না।
      </p>

      <h3 class="text-xl leading-normal font-medium text-black dark:text-white">
        সেবা প্রদানকারী
      </h3>

      <p class="text-black dark:text-white mb-2">
        আমি নিম্নলিখিত কারণে তৃতীয় পক্ষের কোম্পানি এবং ব্যক্তি নিয়োগ করতে
        পারি:
      </p>

      <ul class="list-disc ml-4 mb-2 text-black dark:text-white">
        <li>আমাদের পরিষেবা সহজতর করার জন্য;</li>
        <li>আমাদের পক্ষ থেকে পরিষেবা প্রদান করতে;</li>
        <li>পরিষেবা-সম্পর্কিত পরিষেবাগুলি সম্পাদন করা; বা</li>
        <li>
          আমাদের পরিষেবা কীভাবে ব্যবহার করা হয় তা বিশ্লেষণে আমাদের সহায়তা
          করতে।
        </li>
      </ul>

      <p class="text-black dark:text-white mb-2">
        আমি এই পরিষেবার ব্যবহারকারীদের জানাতে চাই যে এই তৃতীয় পক্ষের তাদের
        ব্যক্তিগত তথ্যে অ্যাক্সেস রয়েছে৷ কারণ হল আমাদের পক্ষ থেকে তাদের উপর
        অর্পিত কাজগুলি সম্পাদন করা। যাইহোক, তারা অন্য কোন উদ্দেশ্যে তথ্য প্রকাশ
        বা ব্যবহার না করতে বাধ্য।
      </p>

      <h3 class="text-xl leading-normal font-medium text-black dark:text-white">
        নিরাপত্তা
      </h3>

      <p class="text-black dark:text-white mb-2">
        আমি আপনার ব্যক্তিগত তথ্য আমাদের প্রদানে আপনার আস্থার মূল্য দিই, এইভাবে
        আমরা এটিকে রক্ষা করার জন্য বাণিজ্যিকভাবে গ্রহণযোগ্য উপায়গুলি ব্যবহার
        করার চেষ্টা করছি৷ কিন্তু মনে রাখবেন যে ইন্টারনেটের মাধ্যমে ট্রান্সমিশনের
        কোনো পদ্ধতি, বা ইলেকট্রনিক স্টোরেজের পদ্ধতি 100% নিরাপদ এবং নির্ভরযোগ্য
        নয় এবং আমি এর সম্পূর্ণ নিরাপত্তার নিশ্চয়তা দিতে পারি না।
      </p>

      <h3 class="text-xl leading-normal font-medium text-black dark:text-white">
        অন্যান্য সাইটের লিঙ্ক
      </h3>

      <p class="text-black dark:text-white mb-2">
        এই পরিষেবাটিতে অন্যান্য সাইটের লিঙ্ক থাকতে পারে। আপনি যদি একটি তৃতীয়
        পক্ষের লিঙ্কে ক্লিক করেন, আপনাকে সেই সাইটে নির্দেশিত করা হবে। মনে রাখবেন
        যে এই বহিরাগত সাইটগুলি আমার দ্বারা পরিচালিত হয় না। অতএব, আমি দৃঢ়ভাবে
        আপনাকে এই ওয়েবসাইটগুলির গোপনীয়তা নীতি পর্যালোচনা করার পরামর্শ দিচ্ছি।
        কোন তৃতীয় পক্ষের সাইট বা পরিষেবার বিষয়বস্তু, গোপনীয়তা নীতি, বা
        অনুশীলনের উপর আমার কোন নিয়ন্ত্রণ নেই এবং দায়বদ্ধতা নেই।
      </p>

      <h3 class="text-xl leading-normal font-medium text-black dark:text-white">
        শিশুদের গোপনীয়তা
      </h3>

      <p class="text-black dark:text-white mb-2">
        এই পরিষেবাগুলি 13 বছরের কম বয়সী কাউকে সম্বোধন করে না। আমি জেনেশুনে 13
        বছরের কম বয়সী শিশুদের কাছ থেকে ব্যক্তিগতভাবে সনাক্তযোগ্য তথ্য সংগ্রহ
        করি না। যদি আমি আবিষ্কার করি যে 13 বছরের কম বয়সী একটি শিশু আমাকে
        ব্যক্তিগত তথ্য প্রদান করেছে, আমি অবিলম্বে এটি আমাদের সার্ভার থেকে মুছে
        ফেলি। আপনি যদি একজন পিতা-মাতা বা অভিভাবক হন এবং আপনি জানেন যে আপনার
        সন্তান আমাদের ব্যক্তিগত তথ্য প্রদান করেছে, তাহলে অনুগ্রহ করে আমার সাথে
        যোগাযোগ করুন যাতে আমি প্রয়োজনীয় পদক্ষেপ নিতে পারি।
      </p>

      <h3 class="text-xl leading-normal font-medium text-black dark:text-white">
        এই গোপনীয়তা নীতি পরিবর্তন
      </h3>

      <p class="text-black dark:text-white mb-2">
        আমি সময়ে সময়ে আমাদের গোপনীয়তা নীতি আপডেট করতে পারি। সুতরাং, যেকোনো
        পরিবর্তনের জন্য আপনাকে পর্যায়ক্রমে এই পৃষ্ঠাটি পর্যালোচনা করার পরামর্শ
        দেওয়া হচ্ছে। আমি এই পৃষ্ঠায় নতুন গোপনীয়তা নীতি পোস্ট করে কোনো
        পরিবর্তন সম্পর্কে আপনাকে অবহিত করব।
      </p>

      <p class="text-black dark:text-white mb-2">
        এই নীতি 2023-09-30 থেকে কার্যকর
      </p>
      <h3 class="text-xl leading-normal font-medium text-black dark:text-white">
        যোগাযোগ করুন
      </h3>

      <p class="text-black dark:text-white mb-2">
        আমার গোপনীয়তা নীতি সম্পর্কে আপনার কোন প্রশ্ন বা পরামর্শ থাকলে,
        <a href="mailto:monzur707@gmail.com">monzur707@gmail.com</a> এ আমার সাথে
        যোগাযোগ করতে দ্বিধা করবেন না।
      </p>

      <button
        class="text-lg border px-3 py-1 text-black dark:text-white bg-white dark:bg-black rounded-lg shadow dark:shadow-none"
        @click="privacyAccept"
      >
        ঠিক আছে
      </button>
    </div>
  </div>
  <div
    class="flex justify-between rounded-md border shadow px-2 py-1 mb-2 cursor-pointer"
    @click="privacyPopup"
  >
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
            d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"
          />
        </svg>

        প্রাইভেসি পলিসি
      </h3>
    </div>
    <div class="flex items-center">
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
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  </div>
</template>

<style scoped>
#privacy-popup {
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
}

.dark #privacy-popup {
  scrollbar-color: #fff transparent;
}
</style>
