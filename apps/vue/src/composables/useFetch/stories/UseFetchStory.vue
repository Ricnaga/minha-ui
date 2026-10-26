<script setup lang="ts">
import { useFetch } from '../';

const { data, isLoading, isError, refetch } = useFetch<{ title: string }>({
  endpoint: 'https://jsonplaceholder.typicode.com/posts/1',
});
</script>

<template>
  <div class="p-10 w-[400px] flex flex-col gap-4">
    <h3 class="text-lg font-semibold">useFetch</h3>
    <p v-if="isLoading">Carregando...</p>
    <p v-else-if="isError">Erro ao carregar</p>
    <p v-else-if="data">{{ data.title }}</p>
    <button @click="refetch" class="px-4 py-2 rounded bg-blue-600 text-white">
      Refetch
    </button>
  </div>
</template>
