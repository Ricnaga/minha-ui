<script lang="ts">
  import type { CardProps } from './card.types';
  import { useCard } from './useCard.svelte';

  const {
    children,
    radius,
    shadow,
    class: className,
    ...attrs
  }: CardProps = $props();

  const { cardProps } = useCard(() => ({
    radius,
    shadow,
    class: className,
  }));
</script>

<article {...attrs} {...cardProps}>
  {@render children?.()}
</article>
