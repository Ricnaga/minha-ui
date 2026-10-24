<script setup lang="ts">
import { useAccordionProvider } from './useAccordion';
import type { UseAccordionProviderProps } from './accordion.types';

const props = defineProps<UseAccordionProviderProps>();
useAccordionProvider(props);
</script>

<template>
  <slot />
</template>
