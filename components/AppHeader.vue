<template>
  <div class="app-header">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/blog">Blog</NuxtLink>
      <NuxtLink to="/guide">Documentacion</NuxtLink>
      <NuxtLink to="/contact">Contacto</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.app-header {
  @apply bg-gray-100 flex flex-row gap-1;
}
.app-header a {
  @apply bg-gray-100 hover:bg-gray-700 text-gray-900 hover:text-white py-3 px-5;
}
</style>