<template>
  <section id="about" class="w-full h-auto rounded-br-3xl rounded-bl-3xl bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100 p-2 lg:p-20">
    <div class="max-w-max lg:max-w-7xl p-5 lg:p-10 space-y-5">
      <div :style="{ backgroundImage: `url('/images/img2.jpg')` }" class="w-full h-150 rounded-3xl bg-no-repeat bg-center bg-cover" />

      <h1 class="font-bold text-6xl lg:text-8xl mb-5 text-center">
        A propos de moi
      </h1>

      <p class="font-title text-lg leading-8 text-center mt-10">
        Je suis un consultant en marketing digital passionné par l'aide aux entreprises pour atteindre leurs objectifs en ligne. Avec une expertise approfondie dans les stratégies de marketing numérique, je travaille en étroite collaboration avec mes clients pour développer des campagnes efficaces qui génèrent des résultats tangibles.
      </p>

      <p class="font-title text-lg leading-8 text-center">
        Mon approche est axée sur la compréhension des besoins uniques de chaque entreprise, afin de créer des solutions personnalisées qui maximisent leur présence en ligne et leur retour sur investissement.
      </p>

      <!-- Statistics -->
      <div id="statistics" ref="statisticsEl" class="py-20">
        <div class="grid grid-rows-3 lg:grid-rows-1 grid-cols-0 lg:grid-cols-3 gap-10">
          <div class="text-center bg-red-700 p-5 rounded-3xl">
            <h2 class="text-4xl font-bold">
              <span ref="experienceTarget">{{ animatedExperience.toFixed(0) }}</span>+
            </h2>
            <p class="text-sm mt-2">
              Années d'expérience
            </p>
          </div>

          <div class="text-center bg-red-700 p-5 rounded-3xl">
            <h2 class="text-4xl font-bold">
              100+
            </h2>
            <p class="text-sm mt-2">
              Projets réussis
            </p>
          </div>

          <div class="text-center bg-red-700 p-5 rounded-3xl">
            <h2 class="text-4xl font-bold">
              50+
            </h2>
            <p class="text-sm mt-2">
              Clients satisfaits
            </p>
          </div>
        </div>
      </div>

      <div class="rounded-3xl p-5 lg:p-20 bg-purple-700 dark:bg-purple-900">
        <h3 class="text-3xl lg:text-6xl text-center mb-10">
          Ce que je fais concrètement
        </h3>

        <div class="grid grid-rows-3 lg:grid-rows-1 grid-cols-1 lg:grid-cols-3 gap-5">
          <motion-group :preset="VueUseMotions.SlideVisibleOnceTop" :delay="300">
            <div v-for="i in 3" :key="i" class="rounded-3xl bg-purple-800 p-15">
              <h4 class="text-3xl mb-5">
                Stratégie de marketing digital
              </h4>

              <p>
                Je développe des stratégies de marketing digital personnalisées pour aider les entreprises à atteindre leurs objectifs en ligne, en utilisant les dernières tendances et technologies du secteur.
              </p>

              <ul class="mt-5 space-y-2">
                <li v-for="i in 5" :key="i" class="flex items-center gap-2 font-semibold">
                  <icon name="lucide:circle-check" />
                  <span>SEO & contenu orientés conversion</span>
                </li>
              </ul>
            </div>
          </motion-group>
        </div>
      </div>

      <div class="rounded-3xl p-1 lg:p-20">
        <motion :preset="VueUseMotions.PopVisibleOnce">
          <h3 class="text-3xl lg:text-6xl text-center mb-10">
            Les valeurs qui me tiennent à coeur
          </h3>
        </motion>

        <div class="grid grid-rows-4 grid-cols-0 lg:grid-cols-2 lg:grid-rows-2 gap-4">
          <div v-for="i in 4" :key="i" class="rounded-3xl bg-red-800 p-10">
            <h4 class="text-3xl mb-5">
              Clarté avant tout
            </h4>

            <p>
              Pas de jargon inutile. Vous comprenez ce qui est fait, pourquoi et avec quel impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { VueUseMotions } from '~/types'
import { TransitionPresets } from '@vueuse/core'

definePageMeta({
  layout: 'other'
})

/**
 * Statistics animation logic
 */

const statisticsEl = useTemplateRef('statisticsEl')
const isVisible = ref(false)

if (import.meta.client) {
  const _isVisible = useElementVisibility(statisticsEl, {
    threshold: 1
  })

  watch(_isVisible, (val) => {
    isVisible.value = val
  })
}

const experienceValue = shallowRef(0)
const animatedExperience = ref(0)

onMounted(() => {
  const _animatedExperience = useTransition(experienceValue, {
    duration: 700,
    easing: TransitionPresets.easeInCubic
  })

  syncRef(animatedExperience, _animatedExperience, { direction: 'rtl' })

  whenever(isVisible, () => {
    experienceValue.value = 10
  })
})
</script>
