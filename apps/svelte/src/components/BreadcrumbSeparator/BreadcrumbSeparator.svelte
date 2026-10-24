<script lang="ts">
  import CaretRightIcon from 'phosphor-svelte/lib/CaretRightIcon';
  import type { BreadcrumbSeparatorProps } from './breadcrumb-separator.types';
  import { useBreadcrumbSeparator } from './useBreadcrumbSeparator.svelte';

  const props: BreadcrumbSeparatorProps = $props();
  const { separatorProps, content } = useBreadcrumbSeparator(() => props);
</script>

<li {...separatorProps}>
  {#if content}
    {#if typeof content === 'function'}
      {@render content()}
    {:else}
      {content}
    {/if}
  {:else}
    <CaretRightIcon aria-hidden="true" />
  {/if}
</li>
