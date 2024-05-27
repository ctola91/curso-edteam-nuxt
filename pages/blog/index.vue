<template>
  <div>
    <h1>Blog Posts</h1>
    <!-- <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.title }}
      </li>
    </ul> -->
    <div v-if="pending">Cargando...</div>
    <BlogList v-else :list="posts as Post" />
  </div>
</template>

<script setup lang="ts">
import type { Post } from '~/interfaces/post';

definePageMeta({
  layout: 'blog'
})

// const posts = ref()

// const { data: posts, pending, error } = await useFetch('/api/posts')
const { data: posts, pending, error } = await useAsyncData('posts', () => $fetch('/api/posts'))

// posts.value = data.value

// /blog
// const list = ref([
//   {
//     id: 1,
//     title: 'Hola EDteam',
//     description: "Este es nuestro post inicial"
//   },
//   {
//     id: 2,
//     title: 'Hola Mundo',
//     description: "Este es nuestro post secundario"
//   },{
//     id: 3,
//     title: 'Hello World',
//     description: "lorem ipsum"
//   },
//   {
//     id: 4,
//     title: 'Curso de Vue 3 desde Cero',
//     description: "Curso inicial"
//   }
// ])
</script>

<style scoped>

</style>