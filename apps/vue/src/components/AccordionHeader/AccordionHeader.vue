<script setup lang="ts">
import type { AccordionHeaderProps } from './accordion-header.types';
import { useAccordionHeader } from './useAccordionHeader';

const props = defineProps<AccordionHeaderProps>();

const { accordionHeaderProps } = useAccordionHeader(props);
</script>

<template>
  <button v-bind="accordionHeaderProps">
    <slot />
  </button>
</template>
