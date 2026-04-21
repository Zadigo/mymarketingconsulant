<template>
  <div ref="accordionItemEl" class="relative group w-auto h-auto p-10 border-2 border-red-500 rounded-3xl space-y-5 cursor-pointer" @click="select(index)">
    <div class="rounded-full h-10 w-10 bg-red-400 text-red-50 font-bold flex items-center justify-center absolute -top-5 left-10 group-hover:scale-105 group-hover:shadow-md tranition-scale duration-500">
      <icon v-if="isOpened" name="lucide:chevron-down" />
      <icon v-else name="lucide:chevron-right" />
    </div>

    <div class="font-bold flex justify-between items-center">
      <span>{{ item.title }}</span>

      <div class="rounded-full w-10 h-10 flex items-center justify-center font-bold bg-red-400 text-red-50">
        {{ index }}
      </div>
    </div>

    <p v-if="isOpened">
      {{ item.content }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  item: AccordionItem
  index: number
}>()

const { select, isSelected, selected } = useAccordionComposable()
const isOpened = isSelected(props.index)

const accordionItemEl = useTemplateRef('accordionItemEl')

onClickOutside(accordionItemEl, () => {
  selected.value = undefined
})
</script>
