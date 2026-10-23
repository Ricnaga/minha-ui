<script setup lang="ts">
import type { ScrollAreaProps } from './scroll-area.types';
import { useScrollArea } from './useScrollArea';

const props = defineProps<ScrollAreaProps>();

const { scrollAreaProps } = useScrollArea(props);
</script>

<template>
  <div v-bind="scrollAreaProps">
    <slot />
  </div>
</template>
