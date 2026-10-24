<script lang="ts">
  import InfoIcon from 'phosphor-svelte/lib/InfoIcon';
  import Input from '../Input.svelte';

  let {
    label = 'Nome',
    variant = 'outline',
    type = 'text',
    withIcons = false,
    ...rest
  }: Record<string, unknown> = $props();
</script>

{#if withIcons}
  <Input
    label={label as string}
    variant={variant as 'outline' | 'underline'}
    type={type as string}
    {...rest}
  >
    {#snippet startIcon()}
      <InfoIcon />
    {/snippet}
    {#snippet endIcon()}
      <InfoIcon />
    {/snippet}
  </Input>
{:else}
  <Input
    label={label as string}
    variant={variant as 'outline' | 'underline'}
    type={type as string}
    {...rest}
  />
{/if}
