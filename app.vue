<script setup lang="ts">
// importacion estatica - compatible con SSR
import '~/assets/css/main.css'

// importacion dinamica - no es compatible con SSR
// import('~/assets/css/main.css')
</script>
<template>
  <div class="app">
    <!-- <div>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/blog">Blog</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </div> -->
    <!-- <NuxtWelcome /> -->
    <!-- <AppHeader /> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!-- <AppFooter /> -->
  </div>
</template>
<style>
/* @import url('~/assets/css/main.css') */
/* .app {
  display: flex;
} */
</style>