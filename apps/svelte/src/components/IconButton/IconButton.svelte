<script lang="ts">
  import { Spinner } from '../Spinner';
  import { iconButtonSpinner } from '@/theme';

  import type { IconButtonProps } from './icon-button.types';
  import { useIconButton } from './useIconButton.svelte';

  const {
    children,
    size,
    radius,
    variant,
    color,
    isLoading,
    class: className,
    disabled,
    type,
    onclick,
    ...attrs
  }: IconButtonProps = $props();

  const button = useIconButton(() => ({
    size,
    radius,
    variant,
    color,
    isLoading,
    class: className,
    disabled,
    type,
    onclick,
  }));
</script>

<button {...attrs} {...button.iconButtonProps}>
  {#if button.isLoading}
    <div class={iconButtonSpinner()}>
      <Spinner />
    </div>
  {:else}
    {@render children?.()}
  {/if}
</button>
