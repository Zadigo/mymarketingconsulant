<template>
  <div :style="{ backgroundImage: `url(${image})` }" :class="theme" class="bg-red-700 bg-no-repeat bg-center bg-cover border-5 border-red-50 dark:border-red-200" />
</template>

<script setup lang="ts">
const { image, square = false } = defineProps<{
  image: string
  square?: boolean
}>()

const theme = computed(() => {
  return [
    {
      'h-30 w-30 rounded-full': !square,
      'h-full w-full rounded-3xl': square
    }
  ]
})
</script>
