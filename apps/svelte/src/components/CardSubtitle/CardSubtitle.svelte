<script lang="ts">
  import type { CardSubtitleProps } from './card-subtitle.types';
  import { useCardSubtitle } from './useCardSubtitle.svelte';

  const {
    children,
    size,
    weight,
    color,
    align,
    class: className,
    ...attrs
  }: CardSubtitleProps = $props();

  const { cardSubtitleProps } = useCardSubtitle(() => ({
    size,
    weight,
    color,
    align,
    class: className,
  }));
</script>

<p {...attrs} {...cardSubtitleProps}>
  {@render children?.()}
</p>
