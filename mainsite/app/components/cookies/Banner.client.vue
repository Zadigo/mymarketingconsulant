<template>
  <div class="flex flex-col items-center w-80 bg-white text-gray-500 p-4 md:p-6 rounded-lg border border-gray-500/30 text-sm">
    <div class="flex items-center justify-start w-full gap-2 pb-3">
      <img class="h-6 w-6" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/cookies/cookieImage1.svg" alt="cookieImage1">
      <h2 class="text-gray-800 text-xl font-medium">
        Cookie Notice
      </h2>
    </div>

    <p>We use cookies to ensure that we give you the best experience on our website. <nuxt-link href="#" class="font-medium underline">Read cookies policies</nuxt-link>.</p>

    <div class="flex items-center justify-between mt-6 gap-3 w-full">
      <nuxt-link class="underline text-xs" href="#">Manage your preferences</nuxt-link>
      <u-button type="button" class="bg-indigo-600 px-6 py-2 rounded text-white font-medium active:scale-95 transition">
        Accept
      </u-button>
    </div>
  </div>
</template>
