<script lang="ts">
  import type { BadgeProps } from './badge.types';
  import { useBadge } from './useBadge.svelte';

  const {
    children,
    value,
    color,
    size,
    position,
    class: className,
    ...attrs
  }: BadgeProps = $props();

  const badge = useBadge(() => ({
    value,
    color,
    size,
    position,
    class: className,
  }));
</script>

<div {...badge.wrapperProps}>
  {@render children?.()}
  {#if badge.value}
    <div {...attrs} {...badge.badgeProps}>{badge.value}</div>
  {/if}
</div>
