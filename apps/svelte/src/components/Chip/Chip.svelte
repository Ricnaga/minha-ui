<script lang="ts">
  import X from 'phosphor-svelte/lib/X';

  import type { ChipProps } from './chip.types';
  import { useChip } from './useChip.svelte';

  const {
    children,
    color,
    size,
    rounded,
    class: className,
    onRemove,
    ...attrs
  }: ChipProps = $props();

  const chip = useChip(() => ({
    color,
    size,
    rounded,
    class: className,
    onRemove,
  }));
</script>

<span {...attrs} {...chip.chipProps}>
  {@render children?.()}
  {#if chip.hasRemove}
    <button {...chip.removeButtonProps}>
      <X aria-hidden="true" />
    </button>
  {/if}
</span>
