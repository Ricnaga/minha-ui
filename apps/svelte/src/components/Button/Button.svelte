<script lang="ts">
  import type { ButtonProps } from './button.types';
  import { useButton } from './useButton.svelte';

  const props: ButtonProps = $props();

  const buttonProps = $derived(useButton(props).buttonProps);
</script>

<div {...buttonProps}>
  <!-- TODO: Implement Button -->
  {@render props.children?.()}
</div>
