<script setup lang="ts">
import { ref } from 'vue';

import type { AccordionSize, AccordionVariant } from '@/theme';

import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
} from '../../';
import type { AccordionType } from '../accordion.types';

type AccordionStoryProps = {
  type?: AccordionType;
  size?: AccordionSize;
  variant?: AccordionVariant;
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
};

const props = withDefaults(defineProps<AccordionStoryProps>(), {
  type: 'single',
  size: undefined,
  variant: undefined,
  defaultValue: () => [],
  onValueChange: undefined,
});

const value = ref<string[]>(props.defaultValue);

function handleValueChange(nextValue: string[]) {
  value.value = nextValue;
  props.onValueChange?.(nextValue);
}
</script>

<template>
  <p>Valor atual: {{ JSON.stringify(value) }}</p>

  <Accordion
    :type="type"
    :size="size"
    :variant="variant"
    :value="value"
    @update:value="handleValueChange"
  >
    <div class="my-4">
      <AccordionItem value="item-1">
        <AccordionHeader>Item 1</AccordionHeader>
        <AccordionContent>Conteúdo 1</AccordionContent>
      </AccordionItem>
    </div>

    <AccordionItem value="item-2">
      <AccordionHeader>Item 2</AccordionHeader>
      <AccordionContent>Conteúdo 2</AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
