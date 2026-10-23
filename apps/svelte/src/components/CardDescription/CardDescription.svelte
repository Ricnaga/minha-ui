<script lang="ts">
  import type { CardDescriptionProps } from './card-description.types';
  import { useCardDescription } from './useCardDescription.svelte';

  const {
    children,
    size,
    weight,
    color,
    align,
    class: className,
    ...attrs
  }: CardDescriptionProps = $props();

  const { cardDescriptionProps } = useCardDescription(() => ({
    size,
    weight,
    color,
    align,
    class: className,
  }));
</script>

<p {...attrs} {...cardDescriptionProps}>
  {@render children?.()}
</p>
