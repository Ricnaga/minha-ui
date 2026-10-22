<script lang="ts">
  import type { AccordionProps } from './accordion.types';
  import { useAccordionProvider } from './useAccordion.svelte';

  const props: AccordionProps = $props();

  useAccordionProvider(() => props);
</script>

{@render props.children?.()}
