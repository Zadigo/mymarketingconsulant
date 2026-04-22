<template>
  <div class="p-20 text-red-200">
    <h3 class="text-6xl leading-22 text-center">
      Besoin de moi ? <br> Travaillons <word-highlight class="bg-purple-200 text-purple-50">ensemble</word-highlight>
    </h3>

    <div :class="{ 'my-10': hasNewsletter, 'mt-10': !hasNewsletter }" class="flex justify-center">
      <u-button size="xl" :to="to">
        Discutons de votre projet
        <icon name="lucide:arrow-up-right" />
      </u-button>
    </div>

    <form v-if="hasNewsletter" class="border-2 border-red-200 rounded-3xl p-20 max-w-2xl mx-auto flex flex-col gap-1 text-center">
      <p class="font-bold text-3xl">
        La newsletter actu marketing
      </p>

      <p class="font-light">
        Vos news toutes les semaines des actus Marketing
      </p>

      <div class="bg-red-100 flex items-center justify-around gap-1 mt-10">
        <u-input type="email" size="xl" class="w-full" placeholder="Email" />
        <u-button>
          S'inscrire
          <icon name="lucide:arrow-up-right" />
        </u-button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  to: string,
  hasNewsletter?: boolean,
}>()
</script>
