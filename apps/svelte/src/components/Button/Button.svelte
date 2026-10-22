<script lang="ts">
  import { Spinner } from '../Spinner';
  import type { ButtonProps } from './button.types';
  import { useButton } from './useButton.svelte';

  const props: ButtonProps = $props();

  const button = useButton(() => props);
</script>

<button {...button.buttonProps}>
  {#if button.isLoading}
    <Spinner color={props.color} class="size-4" />
  {:else}
    {@render props.children?.()}
  {/if}
</button>
