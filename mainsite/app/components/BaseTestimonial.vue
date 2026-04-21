<template>
  <div class="flex flex-col md:flex-row items-start gap-4 text-red-900 dark:text-red-50">
    <nuxt-img class="rounded-3xl" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=400" alt="userImage1" />

    <div class="flex flex-col justify-between">
      <div>
        <icon v-for="idx in 5" :key="idx" name="lucide:star" />

        <p class="max-w-70 mt-6 leading-8">
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud aliquip”
        </p>
      </div>

      <p class="text-lg font-medium">
        Donald Jackman
      </p>
    </div>
  </div>
</template>
