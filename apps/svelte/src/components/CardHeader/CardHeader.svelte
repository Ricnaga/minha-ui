<script lang="ts">
  import type { CardHeaderProps } from './card-header.types';
  import { useCardHeader } from './useCardHeader.svelte';

  const {
    children,
    align,
    divider,
    background,
    class: className,
    ...attrs
  }: CardHeaderProps = $props();

  const { cardHeaderProps } = useCardHeader(() => ({
    align,
    divider,
    background,
    class: className,
  }));
</script>

<header {...attrs} {...cardHeaderProps}>
  {@render children?.()}
</header>
