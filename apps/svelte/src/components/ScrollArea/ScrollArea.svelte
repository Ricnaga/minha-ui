<script lang="ts">
  import type { ScrollAreaProps } from './scroll-area.types';
  import { useScrollArea } from './useScrollArea.svelte';

  const {
    children,
    orientation,
    size,
    role,
    tabindex,
    class: className,
    ...attrs
  }: ScrollAreaProps = $props();

  const { scrollAreaProps } = useScrollArea(() => ({
    orientation,
    size,
    role,
    tabindex,
    class: className,
  }));
</script>

<div {...attrs} {...scrollAreaProps}>
  {@render children?.()}
</div>
