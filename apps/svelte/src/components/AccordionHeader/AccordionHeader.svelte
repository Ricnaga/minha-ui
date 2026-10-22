<script lang="ts">
  import type { AccordionHeaderProps } from './accordion-header.types';
  import { useAccordionHeader } from './useAccordionHeader.svelte';

  const props: AccordionHeaderProps = $props();

  const header = useAccordionHeader(() => props);
</script>

<button {...header.accordionHeaderProps}>
  {@render props.children?.()}
</button>
