<template>
  <section id="contact" class="w-full h-auto rounded-br-3xl rounded-bl-3xl bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100 p-20">
    <div class="max-w-7xl p-10 space-y-5">
      <h1 class="font-bold text-8xl mb-5 text-center">
        Me contacter
      </h1>

      <p class="font-title text-lg leading-8 text-center">
        Un besoin, une question ou un projet en tête ? Le plus simple est d’en discuter pour voir si je peux réellement vous aider.
      </p>

      <div class="grid grid-cols-2 gap-10 mt-20">
        <!-- Contact Form -->
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

        <div id="other-contact">
          <h3 class="text-3xl">
            Plus d'options de contact
          </h3>

          <div class="group rounded-3xl border-2 dark:border-red-200 px-5 py-10 flex items-center gap-6 mt-5 cursor-pointer bg-purple-800 hover:bg-purple-700 dark:hover:bg-purple-900 transition-colors">
            <div class="rounded-full w-15 h-15 flex items-center justify-center font-bold bg-purple-400 text-red-50">
              <icon class="text-2xl font-medium" name="lucide:phone" />
            </div>

            <div class="flex flex-col">
              <p class="text-sm mb-1">
                Par téléphone
              </p>

              <nuxt-link href="tel:+33612345678" class="text-lg font-medium underline underline-offset-8">
                +33 6 12 34 56 78
              </nuxt-link>
            </div>
          </div>

          <div class="group rounded-3xl border-2 dark:border-red-200 px-8 py-10 flex items-center gap-6 mt-5 cursor-pointer bg-purple-800 hover:bg-purple-700 dark:hover:bg-purple-900 transition-colors">
            <div class="rounded-full w-15 h-15 flex items-center justify-center font-bold bg-purple-400 text-red-50">
              <icon class="text-2xl font-medium" name="lucide:mail" />
            </div>
            <div class="flex flex-col">
              <p class="text-sm mb-1">
                Par email
              </p>

              <nuxt-link href="mailto:contact@example.com" class="text-lg font-medium underline underline-offset-8">
                contact@example.com
              </nuxt-link>
            </div>
          </div>
        </div>
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
