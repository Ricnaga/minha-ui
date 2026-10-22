<script lang="ts">
  import type { AccordionContentProps } from './accordion-content.types';
  import { useAccordionContent } from './useAccordionContent.svelte';

  const props: AccordionContentProps = $props();

  const content = useAccordionContent();
</script>

<div {...content.accordionContentWrapperProps}>
  <div {...content.accordionContentInnerProps}>
    <div class="p-2">
      {@render props.children?.()}
    </div>
  </div>
</div>
