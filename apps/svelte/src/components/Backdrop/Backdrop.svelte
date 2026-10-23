<script lang="ts">
  import { onMount } from 'svelte';
  import { Spinner } from '../Spinner';

  import type { BackdropProps } from './backdrop.types';
  import { useBackdrop } from './useBackdrop.svelte';

  const {
    children,
    isOpen,
    blur,
    zIndex,
    isLoading,
    class: className,
    onClose,
    ...attrs
  }: BackdropProps = $props();

  const backdrop = useBackdrop(() => ({
    isOpen,
    blur,
    zIndex,
    isLoading,
    class: className,
    onClose,
  }));

  let el: HTMLDivElement;

  onMount(() => {
    document.body.appendChild(el);
    return () => {
      if (el?.parentNode) el.parentNode.removeChild(el);
    };
  });
</script>

<div bind:this={el} {...attrs} {...backdrop.backdropProps}>
  {#if children}
    {@render children()}
  {:else if isLoading}
    <div {...backdrop.wrapperProps}>
      <Spinner color="primary" thickness="lg" class="size-20" />
    </div>
  {/if}
</div>
