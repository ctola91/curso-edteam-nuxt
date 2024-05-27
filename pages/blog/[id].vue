<template>
  <div>
    <h2>Blog interno: {{ route.params.id }}</h2>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'blog'
})
// /blog/id
const route = useRoute()
</script>

<style scoped>

</style>