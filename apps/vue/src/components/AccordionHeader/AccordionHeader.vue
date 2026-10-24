<script setup lang="ts">
import { useAccordionHeader } from './useAccordionHeader';
import type { AccordionHeaderProps } from './accordion-header.types';

const props = defineProps<AccordionHeaderProps>();
const { accordionHeaderProps } = useAccordionHeader(props);
const ah = accordionHeaderProps as unknown as Record<string, any>;
</script>

<template>
  <button :aria-expanded="ah['aria-expanded']" @click="ah.onClick" :class="ah.class">
    <slot />
  </button>
</template>
