<template>
  <section class="flex flex-col items-center justify-center text-sm max-md:px-4 py-20">
    <h1 class="text-4xl md:text-5xl font-bold bg-linear-to-r from-white to-primary-500 bg-clip-text text-transparent">
      404 Not Found
    </h1>

    <div class="h-px w-80 rounded bg-linear-to-r from-gray-400 to-primary-800 my-5 md:my-7" />

    <p class="md:text-xl text-primary-400 max-w-lg text-center">
      The page you are looking for does not exist or has been moved.
    </p>

    <nuxt-link href="#" class="group flex items-center gap-1 bg-primary hover:bg-primary-700 px-7 py-2.5 text-primary-50 rounded-full mt-10 font-medium active:scale-95 transition-all">
      Back to Home
      <svg class="group-hover:translate-x-0.5 transition" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.583 11h12.833m0 0L11 4.584M17.416 11 11 17.417" stroke="#1E1E1E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </nuxt-link>
  </section>
</template>
