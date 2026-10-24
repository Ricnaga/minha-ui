<script lang="ts">
  import Switch from '../Switch.svelte';

  let {
    size = 'medium',
    color = 'primary',
    disabled = false,
    label = '',
    colors = false,
    ...rest
  }: Record<string, unknown> = $props();
</script>

{#if colors}
  <div style="display: flex; flex-direction: column; gap: 12px">
    <Switch size={size as 'small' | 'medium'} color="primary" defaultChecked label="primary" disabled={disabled as boolean} {...rest} />
    <Switch size={size as 'small' | 'medium'} color="secondary" defaultChecked label="secondary" disabled={disabled as boolean} {...rest} />
    <Switch size={size as 'small' | 'medium'} color="success" defaultChecked label="success" disabled={disabled as boolean} {...rest} />
    <Switch size={size as 'small' | 'medium'} color="info" defaultChecked label="info" disabled={disabled as boolean} {...rest} />
    <Switch size={size as 'small' | 'medium'} color="warning" defaultChecked label="warning" disabled={disabled as boolean} {...rest} />
    <Switch size={size as 'small' | 'medium'} color="error" defaultChecked label="error" disabled={disabled as boolean} {...rest} />
  </div>
{:else}
  <Switch size={size as 'small' | 'medium'} color={color as 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error'} disabled={disabled as boolean} label={label as string} {...rest} />
{/if}
