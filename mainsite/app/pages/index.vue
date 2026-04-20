<template>
  <section id="home" class="relative leading-8">
    <!-- Background -->
    <div class="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat" :style="{ backgroundImage: `url(/images/img1.jpg)` }" />

    <!-- Lead -->
    <div id="lead" class="absolute top-1/50 left-1/2 transform -translate-x-1/2 space-y-8 p-10 max-w-5xl w-full flex flex-col justify-center text-center text-red-50">
      <h1 class="font-bold text-8xl leading-28">
        Un marketing plus <word-highlight class="bg-red-400 text-red-50">efficace</word-highlight> {{ xScroll }}
      </h1>

      <p class="text-2xl font-light">
        Growth Marketing Freelance. J’aide les entreprises à structurer
        et piloter leur acquisition grâce aux automatisations, aux Ads, à des solutions IA utiles,
        au tracking server-side, ainsi qu’à des sites web pensés pour convertir.
      </p>

      <div class="flex justify-center gap-2">
        <u-button size="xl" class="rounded-full">
          Discutons de votre projet <icon name="lucide:arrow-up-right" />
        </u-button>

        <u-button variant="link" size="xl" class="rounded-full">
          Discutons de votre projet
          <icon name="lucide:arrow-up-right" />
        </u-button>
      </div>
    </div>

    <div ref="scrollableEl" class="relative z-10 min-h-screen">
      <!-- Spacer -->
      <div class="h-[90vh]" />

      <div id="scrollable-body" class="relative min-h-screen bg-red-50 dark:bg-red-900 space-y-10 rounded-tr-3xl rounded-tl-3xl">
        <!-- Curved top edge -->
        <svg class="absolute -top-12 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" fill="rgba(18,4,2,1)" />
        </svg>

        <!-- Wrapper -->
        <scrollable-section-wrapper>
          <!-- Intermediate -->
          <grids-two />

          <div class="space-y-25">
            <!-- Card 1 -->
            <grids-single :motion-preset="VueUseMotions.SlideLeft" class="-rotate-1" />

            <!-- Card 2 -->
            <grids-single :motion-preset="VueUseMotions.SlideRight" :delay="900" class="rotate-3" />
          </div>

          <!-- Intermediate -->
          <grids-section-text-content id="accordion-section">
            <lazy-accordion-base hydrate-on-idle />
          </grids-section-text-content>
        </scrollable-section-wrapper>

        <!-- Intermediate -->
        <lazy-grids-text hydrate-on-visible />

        <scrollable-section-wrapper>
          <lazy-grids-sticky-section hydrate-on-visible />
        </scrollable-section-wrapper>

        <!-- Footer -->
        <lazy-base-footer hydrate-on-visible />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { VueUseMotions } from '~/types'

const xScroll = ref(0)
const scrollableEl = useTemplateRef('scrollableEl')

if (import.meta.client) {
  const { x } = useScroll(scrollableEl)
  syncRef(x, xScroll, { direction: 'ltr' })
}
</script>
