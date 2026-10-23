<script lang="ts">
  import type { CardTitleProps } from './card-title.types';
  import { useCardTitle } from './useCardTitle.svelte';

  const {
    children,
    as,
    size,
    weight,
    color,
    align,
    class: className,
    ...attrs
  }: CardTitleProps = $props();

  const { cardTitleProps, tag } = useCardTitle(() => ({
    as,
    size,
    weight,
    color,
    align,
    class: className,
  }));
</script>

<svelte:element this={tag} {...attrs} {...cardTitleProps}>
  {@render children?.()}
</svelte:element>
