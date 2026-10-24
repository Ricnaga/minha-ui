<script lang="ts">
  import type { SliderThumbProps } from './slider-thumb.types';
  import { useSliderThumb } from './useSliderThumb.svelte';

  const props: SliderThumbProps = $props();
  const { thumbProps, bubbleProps, showValue, valueLabel } = useSliderThumb(() => props);
</script>

<div {...thumbProps}>
  {#if showValue}
    <span {...bubbleProps}>{valueLabel}</span>
  {/if}
</div>
