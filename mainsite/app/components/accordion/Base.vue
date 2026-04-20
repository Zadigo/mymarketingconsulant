<template>
  <div id="accordion" class="mt-10 space-y-2">
    <motion-group :preset="VueUseMotions.SlideVisibleOnceRight" :delay="200">
      <accordion-item v-for="(item, idx) in items" :key="idx" :item="item" :index="idx + 1" />
    </motion-group>
  </div>
</template>

<script setup lang="ts">
import { VueUseMotions } from '~/types'

const { items } = useAccordionComposable()
</script>
