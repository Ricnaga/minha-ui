<script lang="ts">
  import type { CardFooterProps } from './card-footer.types';
  import { useCardFooter } from './useCardFooter.svelte';

  const {
    children,
    align,
    wrap,
    divider,
    class: className,
    ...attrs
  }: CardFooterProps = $props();

  const { cardFooterProps } = useCardFooter(() => ({
    align,
    wrap,
    divider,
    class: className,
  }));
</script>

<div {...attrs} {...cardFooterProps}>
  {@render children?.()}
</div>
