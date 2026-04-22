<template>
  <div class="space-y-10 text-red-900 dark:text-red-50 h-auto">
    <!-- Title -->
    <h2 class="font-bold text-6xl text-center">
      <slot name="title" />
    </h2>

    <!-- Description -->
    <p class="text-center text-lg leading-8">
      <slot name="description" />
    </p>

    <slot />

    <!-- CTA -->
    <div v-if="showCta" class="flex justify-center mt-10">
      <u-button :to="to" trailing-icon="lucide:arrow-up-right" size="xl" class="rounded-full">
        En savoir plus
      </u-button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  to: string
  showCta?: boolean
}>()
</script>
