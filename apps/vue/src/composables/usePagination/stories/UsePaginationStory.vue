<script setup lang="ts">
import { usePagination } from '../';

const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
const { pagination, currentPageItems, totalPages, onNextPage, onPrevPage } = usePagination({ items, pageSize: 10 });
</script>

<template>
  <div class="p-10 w-[400px] flex flex-col gap-4">
    <h3 class="text-lg font-semibold">usePagination</h3>
    <ul>
      <li v-for="item in currentPageItems" :key="item">{{ item }}</li>
    </ul>
    <div class="flex gap-2 items-center">
      <button @click="onPrevPage" class="px-3 py-1 border rounded">Anterior</button>
      <span>Página {{ pagination.pageNumber }} / {{ totalPages }}</span>
      <button @click="onNextPage" class="px-3 py-1 border rounded">Próxima</button>
    </div>
  </div>
</template>
