import { slider } from '@/theme';

import { useSlider } from '../Slider/useSlider.svelte';
import type { UseSliderTrackProps } from './slider-track.types';

export function useSliderTrack(getProps: () => UseSliderTrackProps) {
  const ctx = useSlider();
  const { track } = slider();

  return {
    get trackProps() {
      const p = getProps() as Record<string, unknown>;
      return {
        'data-testid': 'slider-track',
        class: track({ size: ctx.size, disabled: ctx.disabled, class: p.class as string | undefined } as Parameters<typeof track>[0]),
        onpointerdown: ctx.handleTrackPointerDown,
        onpointermove: ctx.handleTrackPointerMove,
        onpointerup: ctx.handleTrackPointerUp,
        onpointercancel: ctx.handleTrackPointerUp,
      };
    },
    get trackRef() {
      return ctx.trackRef;
    },
  };
}
