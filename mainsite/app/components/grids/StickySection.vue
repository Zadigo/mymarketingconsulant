<template>
  <!-- Intermediate -->
  <div class="grid grid-cols-2 gap-10 p-30 bg-red-50 dark:bg-red-700 dark:text-red-100 rounded-3xl">
    <div class="space-y-5">
      <motion :preset="VueUseMotions.SlideVisibleOnceRight" tag="h2" class="font-bold text-6xl mb-5 text-wrap">
        Comment on travaille ensemble
      </motion>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates itaque consequuntur
        accusamus, quis at dolorum necessitatibus, assumenda soluta quasi ratione perferendis! Necessitatibus eaque
        a similique laboriosam, asperiores cupiditate ipsam?
      </p>

      <u-button size="xl">
        En savoir plus
        <icon name="lucide:arrow-up-right" />
      </u-button>
    </div>

    <div class="sticky top-0 space-y-5">
      <div v-for="idx in 4" :key="idx" class="group relative p-10 rounded-3xl bg-red-300 dark:bg-red-600 hover:rotate-2 transition-transform duration-800">
        <div class="absolute top-2 left-2 w-10 h-10 rounded-full bg-red-600 dark:bg-red-300 font-bold flex items-center justify-center group-hover:-rotate-16 transition-transform ease-in-out duration-600">
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
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VueUseMotions } from '~/types'
</script>
