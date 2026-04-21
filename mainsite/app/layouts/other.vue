<template>
  <section id="site" class="relative">
    <!-- Navbar -->
    <lazy-base-navbar hydrate-on-idle />

    <main>
      <slot />
    </main>

    <!-- Footer -->
    <lazy-base-footer hydrate-on-visible />
  </section>
</template>

<script setup lang="ts">
const tokens = ['bg-red-900']

onMounted(() => {
  document.body.classList.add(...tokens)
})

onUnmounted(() => {
  document.body.classList.remove(...tokens)
})
</script>
