<template>
  <div>
    <h1 class="text-2xl">About Page</h1>

    <figure class="flex flex-col gap-2 w-full max-width-[1024]">
      <img src="/img/image1.jpg" alt="imagen del cielo estrellado" />
      <figcaption>
        Photo by <a
          href="https://unsplash.com/@denisdegioanni?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Denis
          Degioanni</a> on <a
          href="https://unsplash.com/photos/milky-way-on-mountains-9wH624ALFQA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
      </figcaption>
    </figure>
    <h2>{{ user.name.first }} {{ user.name.last }}</h2>
    <p>{{ user.login.password }}</p>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deleniti accusantium maxime modi facere dolore,
      necessitatibus aperiam culpa dolorum fuga, exercitationem saepe suscipit sint illum beatae! Maxime nostrum error
      amet.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deleniti accusantium maxime modi facere dolore,
      necessitatibus aperiam culpa dolorum fuga, exercitationem saepe suscipit sint illum beatae! Maxime nostrum error
      amet.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero deleniti accusantium maxime modi facere dolore,
      necessitatibus aperiam culpa dolorum fuga, exercitationem saepe suscipit sint illum beatae! Maxime nostrum error
      amet.</p>
  </div>
</template>

<script setup lang="ts">
import type { Result, User } from '~/interfaces/user';

// /about
const { data, pending, error, refresh } = await useFetch('https://randomuser.me/api/', {
  method: 'GET', // POST
  // body: {},
  query: {
    gender: 'male', password: 'upper,lower,1-16'
  }
})

const user = computed<Result>(() => {
  const d = data.value as User
  return d.results[0]
})

</script>

<style scoped></style>