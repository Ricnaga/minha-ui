<script setup lang="ts">
import { ref } from 'vue';
import { useInfiniteScroll } from '../';

const items = ref(Array.from({ length: 10 }, (_, i) => i + 1));
const page = ref(1);

const { ref: targetRef, isLoading } = useInfiniteScroll({
  onLoadMore: async () => {
    await new Promise((r) => setTimeout(r, 500));
    page.value++;
    items.value.push(...Array.from({ length: 10 }, (_, i) => page.value * 10 + i + 1));
  },
});
</script>

<template>
  <div class="h-[300px] overflow-auto w-[300px] border p-4">
    <div v-for="item in items" :key="item" class="py-2 border-b">
      Item {{ item }}
    </div>
    <div :ref="targetRef as any" class="py-4 text-center">
      <span v-if="isLoading">Carregando...</span>
    </div>
  </div>
</template>
