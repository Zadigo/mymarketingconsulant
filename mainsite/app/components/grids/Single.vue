<template>
  <motion :preset="motionPreset" :delay="delay" tag="div" class="space-y-5 bg-red-100 dark:bg-red-800 border-4 border-red-50 dark:border-red-200 text-red-900 dark:text-red-50 rounded-3xl p-20 flex flex-col justify-center">
    <div class="grid grid-cols-12 gap-1">
      <div class="col-span-2">
        <illustration-icon image="/illustrations/space.svg" />
      </div>

      <div class="col-span-10">
        <h3 class="font-bold text-2xl mb-5">
          <slot name="title" />
        </h3>

        <p class="leading-8">
          <slot name="description" />
        </p>

        <div class="flex flex-wrap gap-2 mt-10">
          <fake-button>
            <icon name="lucide:arrow-up-right" />
            En savoir plus
          </fake-button>

          <fake-button>
            <icon name="lucide:arrow-up-right" />
            En savoir plus
          </fake-button>

          <fake-button>
            <icon name="lucide:arrow-up-right" />
            En savoir plus
          </fake-button>
        </div>
      </div>
    </div>
  </motion>
</template>

<script setup lang="ts">
import { VueUseMotions } from '~/types'

const { motionPreset = VueUseMotions.RollVisibleOnceLeft, delay = 300 } = defineProps<{
  motionPreset?: VueUseMotions
  delay?: number
}>()
</script>
