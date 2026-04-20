<template>
  <div class="relative px-20 py-30 leading-8 bg-red-400 text-center rounded-3xl dark:bg-red-800 text-red-50">
    <!-- Background -->
    <div :style="{ backgroundImage: `url(/images/img2.jpg)` }" class="absolute inset-0 backdrop-blur-2xl bg-center bg-no-repeat opacity-10 w-full h-full" />

    <motion :preset="VueUseMotions.SlideVisibleOnceTop" tag="h2" class="text-6xl font-bold mb-10">
      This is an intermediate section
    </motion>

    <p class="text-xl leading-10">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsam, quasi odit non totam
      perspiciatis aut animi nobis incidunt qui ad ea fugit? Perferendis, impedit? Dolorem blanditiis
      facere distinctio. Ad!

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsam, quasi odit non totam
      perspiciatis aut animi nobis incidunt qui ad ea fugit? Perferendis, impedit? Dolorem blanditiis
      facere distinctio. Ad!
    </p>

    <div class="w-full inline-flex items-center justify-center gap-10 mt-10">
      <fake-button v-for="idx in 3" :key="idx">
        <icon name="lucide:arrow-up-right" />
        En savoir plus
      </fake-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VueUseMotions } from '~/types'
</script>
