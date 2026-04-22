<template>
  <div class="grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-12 gap-10 py-10 lg:py-30 text-red-900 dark:text-red-50">
    <div class="space-y-5 col-span-12 lg:col-span-5">
      <motion :preset="VueUseMotions.SlideVisibleOnceLeft" :delay="200" tag="h2" class="font-bold text-6xl mb-5 text-wrap leading-22">
        Un marketing plus <word-highlight class="bg-info-700 text-info-50">efficace</word-highlight>
      </motion>

      <p>
        J’interviens là où l’acquisition devient floue, difficile à piloter ou inefficace.Je structure
        votre marketing, mets en place une base technique fiable et vous donne une vision claire de ce qui
        fonctionne vraiment et pourquoi.
      </p>

      <u-button :to="to" trailing-icon="lucide:arrow-up-right" size="xl" class="rounded-full">
        En savoir plus
      </u-button>
    </div>

    <!-- Card -->
    <motion :preset="VueUseMotions.RollVisibleOnceRight" :delay="300" tag="div" class="space-y-5 bg-red-100 dark:bg-red-800 border-4 border-red-50 dark:border-red-200 rounded-3xl p-10 col-span-12 lg:col-span-7 flex flex-col justify-center rotate-3">
      <div class="grid grid-cols-12 gap-5">
        <div class="col-span-3">
          <illustration-icon image="/illustrations/space.svg" />
        </div>

        <div class="col-span-9">
          <h3 class="font-bold text-2xl mb-5">
            Structuration marketing & pilotage
          </h3>

          <p class="font-light text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsam, quasi odit non
            totam perspiciatis aut animi nobis incidunt qui ad ea fugit? Perferendis, impedit? Dolorem
            blanditiis facere distinctio. Ad!
          </p>

          <div class="flex gap-2 mt-10">
            <fake-button>
              <icon name="lucide:arrow-up-right" />
              Stratégie d'acquisition
            </fake-button>

            <fake-button>
              <icon name="lucide:arrow-up-right" />
              Stratégie d'acquisition
            </fake-button>
          </div>
        </div>
      </div>
    </motion>
  </div>
</template>

<script setup lang="ts">
import { VueUseMotions } from '~/types'

defineProps<{
  to: string
}>()
</script>
