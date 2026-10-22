<script lang="ts">
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

  let {
    type = 'single',
    size,
    variant,
    defaultValue = [],
    onValueChange,
  }: AccordionStoryProps = $props();

  let changedValue = $state<string[] | null>(null);
  const value = $derived(changedValue ?? defaultValue);

  function handleValueChange(nextValue: string[]) {
    changedValue = nextValue;
    onValueChange?.(nextValue);
  }
</script>

<p>Valor atual: {JSON.stringify(value)}</p>

<Accordion {type} {size} {variant} {value} onValueChange={handleValueChange}>
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
