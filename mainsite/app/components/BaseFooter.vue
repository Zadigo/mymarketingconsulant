<template>
  <footer class="flex flex-col items-center justify-around w-full py-20 text-sm bg-red-900 text-red-50 rounded-tr-3xl rounded-tl-3xl">
    <nuxt-img src="/images/brand1.png" />

    <p class="mt-4 text-center">
      Copyright © <nuxt-time year="numeric" :datetime="Date.now()" /> <nuxt-link to="/">My Consultant</nuxt-link>. All rights reservered.
    </p>

    <div class="flex items-center gap-4 mt-6">
      <nuxt-link to="/" class="font-medium text-primary-50 hover:text-primary-100 transition-all">
        Brand Guidelines
      </nuxt-link>

      <div class="h-4 w-px bg-primary-100/20" />
      <nuxt-link to="/" class="font-medium text-primary-50 hover:text-primary-100 transition-all">
        Trademark Policy
      </nuxt-link>
    </div>
  </footer>
</template>
