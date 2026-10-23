<script setup lang="ts">
import { computed } from 'vue';

import type { ScrollAreaSize } from '@/theme';

import { ScrollArea } from '../';

const sizes: ScrollAreaSize[] = ['sm', 'md', 'lg'];

const items = computed(() =>
  Array.from({ length: 12 }, (_, index) => index + 1),
);
</script>

<template>
  <div class="flex gap-4">
    <div
      v-for="size in sizes"
      :key="size"
      class="flex flex-col gap-1 text-neutral-600"
    >
      <span>{{ size }}</span>
      <ScrollArea
        :size="size"
        class="h-48 w-64"
        :aria-label="`Lista tamanho ${size}`"
      >
        <ul class="space-y-2 p-2">
          <li
            v-for="item in items"
            :key="item"
            class="rounded bg-neutral-800 p-2 text-neutral-100"
          >
            Item {{ item }}
          </li>
        </ul>
      </ScrollArea>
    </div>
  </div>
</template>
