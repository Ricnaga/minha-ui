<script setup lang="ts">
import { accordion } from '@/theme';

import type { AccordionItemProps } from './accordion-item.types';
import { useAccordionItemProvider } from './useAccordionItem';

const props = defineProps<AccordionItemProps>();

const { variant, size } = useAccordionItemProvider(props);

const { accordionItem } = accordion();
</script>

<template>
  <div role="presentation" :class="accordionItem({ variant, size })">
    <slot />
  </div>
</template>
