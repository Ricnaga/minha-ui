<script lang="ts">
  import WarningCircle from 'phosphor-svelte/lib/WarningCircle';

  import type { ErrorStateProps } from './error-state.types';
  import { useErrorState } from './useErrorState.svelte';

  const {
    image,
    title,
    message: messageProp,
    action,
    class: className,
    ...attrs
  }: ErrorStateProps = $props();

  const errorState = useErrorState(() => ({
    class: className,
    image,
    title,
    message: messageProp,
    action,
  }));
</script>

<div {...attrs} {...errorState.rootProps}>
  {#if image !== null}
    <div {...errorState.imageProps}>
      {#if image}
        {@render image()}
      {:else}
        <WarningCircle size={48} aria-hidden="true" />
      {/if}
    </div>
  {/if}
  {#if title !== null && title !== undefined}
    <p {...errorState.titleProps}>
      {#if typeof title === 'function'}
        {@render title()}
      {:else}
        {title}
      {/if}
    </p>
  {/if}
  {#if errorState.message !== null && errorState.message !== undefined}
    <p {...errorState.messageProps}>
      {#if typeof errorState.message === 'function'}
        {@render errorState.message()}
      {:else}
        {errorState.message}
      {/if}
    </p>
  {/if}
  {#if action !== null && action !== undefined}
    <div {...errorState.actionProps}>
      {#if action}
        {@render action()}
      {/if}
    </div>
  {/if}
</div>
