<template>
  <a :href="href" :class="theme" class="w-25 h-25 rounded-2xl border-2 flex items-center justify-center flex-col transition-all duration-300 ease-in-out" target="_blank" rel="noopener noreferrer">
    <icon :name="iconName" class="text-3xl text-red-50" />
  </a>
</template>

<script setup lang="ts">
const { href, iconName, highlight = false } = defineProps<{

  href: string
  iconName: string
  highlight?: boolean
}>()

const theme = computed(() => {
  return [
    'hover:-rotate-10',
    {
      'bg-blue-700 hover:bg-transparent text-blue-50 rotate-8': highlight,
      'bg-transparent hover:bg-blue-700': !highlight
    }
  ]
})
</script>
