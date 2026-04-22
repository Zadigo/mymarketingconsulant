<template>
  <div class="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-10 p-3 lg:p-30 bg-red-100 dark:bg-red-700 text-red-900 dark:text-red-100 rounded-3xl">
    <!-- Title -->
    <div class="space-y-5">
      <motion :preset="VueUseMotions.SlideVisibleOnceRight" tag="h2" class="font-bold text-6xl mb-5 text-wrap">
        <slot name="title" />
      </motion>

      <p class="text-xl leading-8">
        <slot name="description" />
      </p>

      <u-button size="xl">
        En savoir plus
        <icon name="lucide:arrow-up-right" />
      </u-button>
    </div>

    <!-- Steps -->
    <div class="space-y-5">
      <article v-for="idx in 4" :key="idx" class="group relative p-10 rounded-3xl bg-red-200 dark:bg-red-600 hover:rotate-2 transition-transform duration-800">
        <div class="absolute top-2 left-2 w-10 h-10 rounded-full bg-red-300 dark:bg-red-300 text-red-100 font-bold flex items-center justify-center group-hover:-rotate-16 transition-transform ease-in-out duration-600">
          {{ idx }}
        </div>

        <div class="ps-8">
          <h3 class="text-2xl font-bold mb-5">
            Premier échange & plan d'action
          </h3>

          <p class="leading-8">
            On commence par un échange pour comprendre votre situation, vos objectifs et vos contraintes.

            À partir de cet échange, je construis une feuille de route claire et priorisée. Vous savez exactement ce qu’on va faire, pourquoi, et dans quel ordre, avant toute mise en place.
          </p>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VueUseMotions } from '~/types'
</script>
