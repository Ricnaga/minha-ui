<script lang="ts">
  import { Spinner } from '../Spinner';
  import type { ButtonProps } from './button.types';
  import { useButton } from './useButton.svelte';

  const {
    variant,
    color,
    size,
    radius,
    isLoading,
    disabled,
    type,
    class: className,
    onclick,
    children,
    ...attrs
  }: ButtonProps = $props();

  const button = useButton(() => ({
    variant,
    color,
    size,
    radius,
    isLoading,
    disabled,
    type,
    class: className,
    onclick,
  }));
</script>

<button {...attrs} {...button.buttonProps}>
  {#if button.isLoading}
    <Spinner {color} class="size-4" />
    <span {...button.labelProps}>{@render children?.()}</span>
  {:else}
    {@render children?.()}
  {/if}
</button>
