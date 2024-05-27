<template>
  <div>
    <h1 class="text-2xl">Home Page</h1>

    <!-- <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
      <Style type="text/css" children="body { background-color: gray; }"></Style>
    </Head> -->
  </div>
</template>
<script setup lang="ts">
const title = ref("Hola desde los tags")
// useHead({
//   // title: "EDteam - Mi Blog",
//   // meta: [
//   //   {
//   //     name: 'description', content: 'Esta es la pagina inicial de mi aplicacion'
//   //   }
//   // ],
//   bodyAttrs: {
//     class: 'body-section'
//   },
//   script: [{ innerHTML: 'console.log(\'Hola EDteam desde la consola\')' }]
// })

useSeoMeta({
  title: 'Mi meta Blog',
  description: 'Mi blog',
  ogTitle: 'Compartido en Facebook',
  ogDescription: 'Description'
})
</script>