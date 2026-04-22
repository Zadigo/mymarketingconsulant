<template>
  <div class="text-sm w-80 border border-red-200 pb-6 rounded-3xl bg-red-100 shadow-sm shadow-red-950/30">
    <div class="flex flex-col items-center px-5 py-4 relative">
      <nuxt-img class="h-24 w-24 absolute -top-14 rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="userImage1" />
      <div class="pt-8 text-center">
        <h1 class="text-lg font-medium text-primary-800">
          Donald Jackman
        </h1>
        <p class="text-primary-800/80">
          Content Creator
        </p>
      </div>
    </div>

    <p class="text-primary-800/80 px-6 text-center leading-8">
      I've been using prebuiltui for nearly two years, primarily for web pages and it has been incredibly 
      user-friendly, making my work much easier.
    </p>

    <div class="flex justify-center pt-4">
      <div class="flex gap-0.5">
        <icon v-for="idx in 5" :key="idx" name="lucide:star" class="text-secondary-500" />
      </div>
    </div>
  </div>
</template>
