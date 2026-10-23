<script lang="ts">
  import type { TransitionContainerProps } from './transition-container.types';
  import { useTransitionContainer } from './useTransitionContainer.svelte';

  const {
    children,
    isOpen,
    animation,
    'aria-hidden': ariaHidden,
    inert,
    class: className,
    ...attrs
  }: TransitionContainerProps = $props();

  const { transitionContainerProps } = useTransitionContainer(() => ({
    isOpen,
    animation,
    'aria-hidden': ariaHidden,
    inert,
    class: className,
  }));
</script>

<div {...attrs} {...transitionContainerProps}>
  {@render children?.()}
</div>
