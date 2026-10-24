<script lang="ts">
  import type { SwitchProps } from './switch.types';
  import { useSwitch } from './useSwitch.svelte';

  const props: SwitchProps = $props();
  const { containerProps, trackProps, labelProps, hasLabel, labelContent } = useSwitch(() => props as Record<string, unknown>);
  const trackPropsSafe = trackProps as Record<string, unknown>;
</script>

<label {...containerProps}>
  <input
    id={props.id}
    disabled={props.disabled}
    checked={props.checked as boolean | undefined}
    defaultChecked={props.defaultChecked as boolean | undefined}
    type="checkbox"
    role="switch"
    class={trackPropsSafe.class as string}
    onchange={trackPropsSafe.onchange as (event: Event) => void}
  />
  {#if hasLabel}
    <span {...labelProps}>
      {#if typeof labelContent === 'function'}
        {@render labelContent()}
      {:else}
        {labelContent}
      {/if}
    </span>
  {/if}
</label>
