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
    <div class="flex justify-center mt-10">
      <u-button size="xl">
        En savoir plus
        <icon name="lucide:arrow-up-right" />
      </u-button>
    </div>
  </div>
</template>
