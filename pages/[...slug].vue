<template>
  <main v-if="post">
    <h1>{{ post.title }}</h1>
    <ContentDoc />
  </main>
</template>

<script setup lang="ts">
const { path } = useRoute()

const { data: post } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne()
})
</script>

<style scoped></style>