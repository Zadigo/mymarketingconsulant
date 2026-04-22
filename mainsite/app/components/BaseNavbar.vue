<template>
  <header class="absolute top-0 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-6 py-3 md:py-4 shadow max-w-5xl rounded-full mx-auto w-full">
    <nuxt-link to="/">
      <nuxt-img src="/images/brand1.png" alt="Brand Logo" />
    </nuxt-link>

    <nav id="menu" class="max-md:absolute max-md:top-0 max-md:left-0 max-md:overflow-hidden items-center justify-center max-md:h-full max-md:w-0 transition-[width] backdrop-blur flex-col md:flex-row flex gap-8 text-red-50 text-xl font-normal">
      <nuxt-link v-for="link in links" :key="link.name" :to="link.href" class="hover:text-red-100">
        {{ link.name }}
      </nuxt-link>

      <u-button id="closeMenu" class="md:hidden text-red-600">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </u-button>
    </nav>

    <div class="flex items-center space-x-4">
      <u-button icon="lucide:sun" class="hidden lg:flex" />

      <u-button icon="lucide:phone" to="/contact" variant="solid" size="lg" class="hidden lg:block rounded-full">
        Me contacter
      </u-button>

      <u-button id="openMenu" class="md:hidden text-red-600">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </u-button>
    </div>
  </header>
</template>

<script setup lang="ts">
const links = [
  {
    name: 'À propos',
    href: '/a-propos'
  },
  {
    name: 'Contact',
    href: '/contact'
  }
]
</script>
