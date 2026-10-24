<script lang="ts">
  import type { InputProps } from './input.types';
  import { useInput } from './useInput.svelte';

  const props: InputProps = $props();
  const {
    containerProps,
    endIconProps,
    hasEndIcon,
    hasStartIcon,
    inputProps,
    labelProps,
    startIconProps,
    inputWrapperProps,
  } = useInput(() => props as Record<string, unknown>);
</script>

<div {...containerProps}>
  {#if hasStartIcon}
    <div {...startIconProps}>
      {@render props.startIcon?.()}
    </div>
  {/if}

  <div {...inputWrapperProps}>
    <input {...inputProps} {...props} />
    <label {...labelProps}>{props.label}</label>
  </div>

  {#if hasEndIcon}
    <div {...endIconProps}>
      {@render props.endIcon?.()}
    </div>
  {/if}
</div>
