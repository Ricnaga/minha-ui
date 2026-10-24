<script lang="ts">
  import type { SliderTrackProps } from './slider-track.types';
  import { useSliderTrack } from './useSliderTrack.svelte';

  const props: SliderTrackProps = $props();
  const { trackProps, trackRef } = useSliderTrack(() => props);
</script>

<div bind:this={trackRef.current} {...trackProps}>
  {@render props.children?.()}
</div>
