<template>
  <section id="contact" class="w-full h-auto rounded-br-3xl rounded-bl-3xl bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100 p-20">
    <div class="max-w-7xl p-10 space-y-5">
      <h1 class="font-bold text-8xl mb-5 text-center">
        Me contacter
      </h1>

      <p class="font-title text-lg leading-8 text-center">
        Un besoin, une question ou un projet en tête ? Le plus simple est d’en discuter pour voir si je peux réellement vous aider.
      </p>

      <div class="grid grid-cols-2 mt-20">
        <form class="rounded-3xl p-10 bg-red-700 dark:bg-red-800 space-y-5">
          <div class="flex gap-2">
            <u-input type="text" class="w-full" size="xl" placeholder="Firstname" />
            <u-input type="text" class="w-full" size="xl" placeholder="Lastname" />
          </div>

          <div class="flex gap-2">
            <u-input type="tel" class="w-full" size="xl" placeholder="Phone" />
            <u-input type="text" class="w-full" size="xl" placeholder="Company" />
          </div>

          <u-input type="email" class="w-full" size="xl" placeholder="Email" />
          <u-textarea :rows="10" class="w-full" size="xl" placeholder="Message" />
        </form>
      </div>

      <blocks-content>
        <blocks-section-container>
          <grids-section-text-content id="accordion-section">
            <template #title>
              FAQ
            </template>

            <template #description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, veritatis? Suscipit consequatur sequi quam iusto numquam cupiditate, corrupti corporis odio dolorum eius atque ipsum, maxime tempora ipsam eaque, vel recusandae!
            </template>

            <!-- Accordion -->
            <lazy-accordion-base :delay="0" hydrate-on-idle />
          </grids-section-text-content>
        </blocks-section-container>
      </blocks-content>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'other'
})
</script>
