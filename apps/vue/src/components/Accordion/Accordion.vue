<script setup lang="ts">
import type { AccordionEmits, AccordionProps } from './accordion.types';
import { useAccordionProvider } from './useAccordion';

const props = defineProps<AccordionProps>();
const emit = defineEmits<AccordionEmits>();

useAccordionProvider(props, (value) => emit('update:value', value));
</script>

<template>
  <slot />
</template>
