<script setup lang="ts">
import { accordion } from '@/theme';
import { useAccordion } from '../Accordion/useAccordion';
import { provideAccordionItem, useAccordionItemProvider } from './useAccordionItem';
import type { AccordionItemProps } from './accordion-item.types';

const { accordionItem } = accordion();
const props = defineProps<AccordionItemProps>();
const { value: itemValue } = useAccordionItemProvider(props);
const { currentValue, variant, size } = useAccordion();
const isOpen = currentValue?.includes(itemValue);
provideAccordionItem({ value: itemValue, isOpen, variant, size });
</script>

<template>
  <div role="presentation" :class="accordionItem({ variant, size })">
    <slot />
  </div>
</template>
