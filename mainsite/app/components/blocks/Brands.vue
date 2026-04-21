<template>
  <div class="p-20 bg-red-900 text-red-50 rounded-3xl">
    <div class="w-full h-full overflow-x-scroll grid grid-cols-12">
      <div v-for="idx in 12" :key="idx" class="p-2 rounded-3xl gap-3 flex-nowrap">
        <nuxt-img src="/images/brand1.png" class="w-full h-full hover:-translate-y-1 transition-transform duration-300" alt="Brand 1" />
      </div>
    </div>
  </div>
</template>
