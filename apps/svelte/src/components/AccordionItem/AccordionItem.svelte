<script lang="ts">
  import { accordion } from '@/theme';

  import type { AccordionItemProps } from './accordion-item.types';
  import { useAccordionItemProvider } from './useAccordionItem.svelte';

  const props: AccordionItemProps = $props();

  const item = useAccordionItemProvider(() => props);

  const { accordionItem } = accordion();
</script>

<div
  role="presentation"
  class={accordionItem({ variant: item.variant, size: item.size })}
>
  {@render props.children?.()}
</div>
