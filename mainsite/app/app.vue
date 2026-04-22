<template>
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>

<script setup lang="ts">
import { provideSSRWidth } from '@vueuse/core'

const nuxtApp = useNuxtApp()
provideSSRWidth(1024, nuxtApp.vueApp)

const { locales, locale } = useI18n()
useState('ogLocaleAlternate', () => locales.value.filter(l => l.code !== locale.value).map(l => l.code))

/**
 * General SEO Tags
 */

const { get } = useBusinessDetails()

useHead({
  meta: [
    {
      name: 'geo.region',
      content: 'FR-HDF'
    },
    {
      name: 'geo.placename',
      content: get('address').city
    },
    {
      name: 'geo.position',
      content: `${get('address').lat},${get('address').lng}`
    },
    {
      name: 'ICBM',
      content: `${get('address').lat},${get('address').lng}`
    }
  ]
})
</script>
