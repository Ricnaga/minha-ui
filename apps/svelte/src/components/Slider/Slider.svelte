<script lang="ts">
  import type { SliderProps } from './slider.types';
  import { useSliderProvider } from './useSlider.svelte';

  const props: SliderProps = $props();
  const res = useSliderProvider(() => props) as any;
</script>

<div {...res.rootProps}>
  {@render res.children?.()}
</div>
