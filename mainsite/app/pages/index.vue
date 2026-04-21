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

      <div id="scrollable-body" class="relative min-h-screen bg-red-900 dark:bg-red-900 space-y-1 rounded-tr-3xl rounded-tl-3xl overflow-hidden">
        <blocks-content>
          <blocks-section-container>
            <!-- Intermediate -->
            <grids-two />

            <div class="space-y-25">
              <!-- Card 1 -->
              <grids-single :motion-preset="VueUseMotions.SlideVisibleOnceLeft" class="-rotate-1 w-260">
                <template #title>
                  Mise en place technique
                </template>

                <template #description>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius minima, voluptate est, rem officiis temporibus architecto voluptatibus autem minus earum provident sapiente vitae esse quam. Alias veritatis quasi vero recusandae.
                </template>
              </grids-single>

              <!-- Card 2 -->
              <grids-single :motion-preset="VueUseMotions.SlideVisibleOnceRight" :delay="500" class="rotate-3 w-260 ms-20">
                <template #title>
                  Mise en place technique
                </template>

                <template #description>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius minima, voluptate est, rem officiis temporibus architecto voluptatibus autem minus earum provident sapiente vitae esse quam. Alias veritatis quasi vero recusandae.
                </template>
              </grids-single>
            </div>
          </blocks-section-container>
        </blocks-content>

        <!-- Brands -->
        <lazy-blocks-brands hydrate-on-visible />

        <!-- Section. Accordion -->
        <blocks-content>
          <blocks-section-container>
            <grids-section-text-content id="accordion-section">
              <template #title>
                Des problématiques courantes. <br> Une réponse claire.
              </template>

              <template #description>
                J’interviens souvent dans les mêmes situations : du temps perdu, des décisions
                prises à l’aveugle, des outils empilés sans logique. Mon rôle est d’identifier
                le vrai problème, puis de mettre en place une réponse simple et adaptée.
              </template>

              <!-- Accordion -->
              <lazy-accordion-base hydrate-on-idle />
            </grids-section-text-content>
          </blocks-section-container>
        </blocks-content>

        <!-- Text Right -->
        <lazy-grids-text-right hydrate-on-visible>
          <template #title>
            Un besoin ? Travaillons <word-highlight class="bg-purple-200 text-purple-50">ensemble</word-highlight>
          </template>

          <template #description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates itaque consequuntur
            accusamus, quis at dolorum necessitatibus, assumenda soluta quasi ratione perferendis! Necessitatibus eaque
            a similique laboriosam, asperiores cupiditate ipsam?
          </template>
        </lazy-grids-text-right>

        <blocks-content>
          <blocks-section-container>
            <lazy-grids-sticky-section hydrate-on-visible>
              <template #title>
                Comment on travaille ensemble
              </template>

              <template #description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptates itaque consequuntur
                accusamus, quis at dolorum necessitatibus, assumenda soluta quasi ratione perferendis! Necessitatibus eaque
                a similique laboriosam, asperiores cupiditate ipsam?
              </template>
            </lazy-grids-sticky-section>
          </blocks-section-container>
        </blocks-content>

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
