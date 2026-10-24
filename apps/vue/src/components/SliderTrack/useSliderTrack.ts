import { computed } from 'vue';

import { slider } from '@/theme';

import { useSlider } from '../Slider/useSlider';
import type { UseSliderTrackProps } from './slider-track.types';

export function useSliderTrack(props: UseSliderTrackProps) {
  const {
    size,
    disabled,
    trackRef,
    handleTrackPointerDown,
    handleTrackPointerMove,
    handleTrackPointerUp,
  } = useSlider();

  const { track } = slider();

  const trackProps = computed(() => ({
    'data-testid': 'slider-track',
    ref: trackRef,
    class: track({ size, disabled, class: props.class }),
    onPointerdown: handleTrackPointerDown,
    onPointermove: handleTrackPointerMove,
    onPointerup: handleTrackPointerUp,
    onPointercancel: handleTrackPointerUp,
  }));

  return { trackProps };
}
