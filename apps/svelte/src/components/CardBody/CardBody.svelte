<script lang="ts">
  import type { CardBodyProps } from './card-body.types';
  import { useCardBody } from './useCardBody.svelte';

  const {
    children,
    padding,
    gap,
    background,
    class: className,
    ...attrs
  }: CardBodyProps = $props();

  const { cardBodyProps } = useCardBody(() => ({
    padding,
    gap,
    background,
    class: className,
  }));
</script>

<div {...attrs} {...cardBodyProps}>
  {@render children?.()}
</div>
