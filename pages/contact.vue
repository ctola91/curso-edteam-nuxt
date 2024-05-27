<template>
  <div>
    <h1 class="text-2xl">Contactame!</h1>
    <VeeForm @submit="onSubmit" class="flex flex-col gap-3 items-start">
      <VeeField name="email" type="email" class="border border-gray-700" :rules="isRequired" />
      <VeeErrorMessage name="email" class="text-red-700" />
      <USelect v-model="selected" size="md" :options="items" />
      <UModal v-model="isOpen">
        <div class="p-4">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sunt corporis labore repellat, vero ullam
            impedit est rerum libero? Voluptatem quam minus voluptates accusamus exercitationem ex deleniti fuga quod
            neque.</p>
        </div>
      </UModal>
      <UButton type="submit" label="Enviar" variant="solid" />
    </VeeForm>
    <UButton @click="isOpen = !isOpen" label="Show /Hide modal" />
  </div>
</template>

<script setup lang="ts">
const selected = ref<string>("")
const isOpen = ref(true)
const items = ['hello', 'world', 'EDteam']

function isRequired(value) {
  if (value && value.trim()) {
    return true;
  }
  return 'Esto es requerido!';
}

const onSubmit = (values) => {
  console.log('Form values: ', values)
}
</script>

<style scoped></style>