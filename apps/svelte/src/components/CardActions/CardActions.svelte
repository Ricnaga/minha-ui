<script lang="ts">
  import type { CardActionsProps } from './card-actions.types';
  import { useCardActions } from './useCardActions.svelte';

  const {
    children,
    align,
    direction,
    wrap,
    divider,
    class: className,
    ...attrs
  }: CardActionsProps = $props();

  const { cardActionsProps } = useCardActions(() => ({
    align,
    direction,
    wrap,
    divider,
    class: className,
  }));
</script>

<footer {...attrs} {...cardActionsProps}>
  {@render children?.()}
</footer>
