<template>
  <div>
    <h1 class="text-2xl mb-4">Home Page</h1>
    <p class="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint doloribus nostrum repellendus reprehenderit ipsam. Autem, necessitatibus, expedita numquam dolor ipsum, harum beatae impedit iure voluptate repellendus atque eaque facilis odio.</p>
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