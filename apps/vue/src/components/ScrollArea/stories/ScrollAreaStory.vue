<script setup lang="ts">
import { computed } from 'vue';

import { ScrollArea } from '../';
import type { ScrollAreaProps } from '../scroll-area.types';

type ScrollAreaStoryProps = ScrollAreaProps & {
  count?: number;
  label?: string;
};

const props = withDefaults(defineProps<ScrollAreaStoryProps>(), {
  orientation: undefined,
  size: undefined,
  class: undefined,
  dir: undefined,
  count: 20,
  label: 'Lista de itens',
});

const items = computed(() =>
  Array.from({ length: props.count }, (_, index) => index + 1),
);
</script>

<template>
  <ScrollArea
    :orientation="props.orientation"
    :size="props.size"
    :class="props.class"
    :dir="props.dir"
    :aria-label="props.label"
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
</template>
