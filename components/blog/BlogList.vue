<template>
  <div class="flex flex-row flex-wrap gap-xs gap-l items-center justify-start">
    <BlogItem v-for="item in list" :key="item.id" :item="item" />
  </div>
</template>

<script setup lang="ts">
import type { Post } from "../../interfaces/post"

interface Props {
  list: Post[]
}

const props = defineProps<Props>()
const list = toRef(props, 'list')
</script>

<style scoped></style>