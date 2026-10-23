<script lang="ts">
  import type { DividerProps } from './divider.types';
  import { useDivider } from './useDivider.svelte';

  const {
    orientation,
    inset,
    class: className,
    ...attrs
  }: DividerProps = $props();

  const { dividerProps } = useDivider(() => ({
    orientation,
    inset,
    class: className,
  }));
</script>

<div {...attrs} {...dividerProps}></div>
