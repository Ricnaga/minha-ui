<script setup lang="ts">
import { useResource } from '../';

const { data, refetch } = useResource<{ title?: string }>({
  endpoint: 'https://jsonplaceholder.typicode.com/posts/1',
});
</script>

<template>
  <div class="p-10 w-[400px] flex flex-col gap-4">
    <h3 class="text-lg font-semibold">useResource</h3>
    <p>{{ (data as any)?.title }}</p>
    <button @click="refetch" class="px-4 py-2 rounded bg-blue-600 text-white">
      Refetch
    </button>
  </div>
</template>
