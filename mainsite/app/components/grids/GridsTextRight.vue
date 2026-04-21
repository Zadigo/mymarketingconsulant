<template>
  <div class="relative p-20 bg-red-900 text-red-50 rounded-3xl overflow-hidden min-h-200">
    <div :style="{ backgroundImage: `url(/images/img2.jpg)` }" class="absolute top-0 left-0 z-1 opacity-60 w-full h-full bg-center bg-cover bg-no-repeat" />

    <div class="absolute top-1/2 transform -translate-y-1/2 right-2/12 max-w-lg z-10 text-red-50">
      <h2 class="text-5xl mb-5 leading-22">
        <slot name="title" />
      </h2>

      <p class="leading-8">
        <slot name="description" />
      </p>

      <div class="mt-10">
        <u-button size="xl" class="rounded-full">
          Discutons de votre projet
          <icon name="lucide:arrow-up-right" />
        </u-button>
      </div>
    </div>
  </div>
</template>
