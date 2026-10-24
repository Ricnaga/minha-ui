<script lang="ts">
  import type { TooltipProps } from './tooltip.types';
  import { useTooltip } from './useTooltip.svelte';

  const props: TooltipProps = $props();
  const { wrapperProps, tooltipProps } = useTooltip(() => props);
</script>

<div {...wrapperProps}>
  {@render props.children?.()}
  <div {...tooltipProps}>
    {#if typeof props.content === 'function'}
      {@render props.content()}
    {:else}
      {props.content}
    {/if}
  </div>
</div>
