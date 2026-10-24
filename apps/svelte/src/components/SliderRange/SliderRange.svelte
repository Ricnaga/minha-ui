<script lang="ts">
  import type { SliderRangeProps } from './slider-range.types';
  import { useSliderRange } from './useSliderRange.svelte';

  const props: SliderRangeProps = $props();
  const { rangeProps } = useSliderRange(() => props);
</script>

<div {...rangeProps}></div>
