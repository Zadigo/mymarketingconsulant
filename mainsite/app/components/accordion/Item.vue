<template>
  <div ref="accordionItemEl" class="relative group w-auto h-auto p-10 border-2 border-red-500 rounded-3xl space-y-5 cursor-pointer" @click="select(index)">
    <div class="rounded-full h-10 w-10 bg-red-400 text-red-50 font-bold flex items-center justify-center absolute -top-5 left-10 group-hover:scale-105 group-hover:shadow-md transition-scale duration-500">
      <icon v-if="isOpened" name="lucide:chevron-down" />
      <icon v-else name="lucide:chevron-right" />
    </div>

    <div class="font-bold flex justify-between items-center">
      <span class="text-xl">{{ item.title }}</span>

      <div class="rounded-full w-10 h-10 flex items-center justify-center font-bold bg-red-400 text-red-50">
        {{ index }}
      </div>
    </div>

    <transition
      mode="out-in"
      enter-active-class="transition-all ease-out duration-500"
      leave-active-class="transition-all ease-in duration-600"
      enter-from-class="opacity-0 -translate-y-5"
      enter-to-class="opacity-100 translate-y-0"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-5"
    >
      <p v-if="isOpened" class="font-light text-lg leading-8">
        {{ item.content }}
      </p>
    </transition>
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
