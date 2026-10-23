<script lang="ts">
  import Tray from 'phosphor-svelte/lib/Tray';

  import type { EmptyStateProps } from './empty-state.types';
  import { useEmptyState } from './useEmptyState.svelte';

  const {
    image,
    title,
    message: messageProp,
    action,
    class: className,
    ...attrs
  }: EmptyStateProps = $props();

  const emptyState = useEmptyState(() => ({
    class: className,
    image,
    title,
    message: messageProp,
    action,
  }));
</script>

<div {...attrs} {...emptyState.rootProps}>
  {#if image !== null}
    <div {...emptyState.imageProps}>
      {#if image}
        {@render image()}
      {:else}
        <Tray size={48} aria-hidden="true" />
      {/if}
    </div>
  {/if}
  {#if title !== null && title !== undefined}
    <p {...emptyState.titleProps}>
      {#if typeof title === 'function'}
        {@render title()}
      {:else}
        {title}
      {/if}
    </p>
  {/if}
  {#if emptyState.message !== null && emptyState.message !== undefined}
    <p {...emptyState.messageProps}>
      {#if typeof emptyState.message === 'function'}
        {@render emptyState.message()}
      {:else}
        {emptyState.message}
      {/if}
    </p>
  {/if}
  {#if action !== null && action !== undefined}
    <div {...emptyState.actionProps}>
      {#if action}
        {@render action()}
      {/if}
    </div>
  {/if}
</div>
