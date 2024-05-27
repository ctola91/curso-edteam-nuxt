<template>
  <NuxtLink :to="`/blog/${item.id}`" class="flex flex-col gap-2 w-30 max-w-[320px]">
    <div class="text-primary-600">{{ item.title }}</div>
    <img :src="item.image" alt="imagen" class="w-full" />
    <p class="truncate">{{ item.description }}</p>
    <div v-for="tag in item.tags" :key="tag.id">
      <span class="text-xs bg-gray-100 rounded px-2 py-1">
        {{ tag.name }}
      </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Post } from '~/interfaces/post';

interface Props {
  item: Post
}

const props = defineProps<Props>()
const item = toRef(props, 'item')
</script>

<style scoped></style>