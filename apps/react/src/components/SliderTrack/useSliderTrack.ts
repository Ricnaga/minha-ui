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

  return {
    trackRef,
    trackProps: {
      'data-testid': 'slider-track',
      className: track({ size, disabled, className: props.className }),
      onPointerDown: handleTrackPointerDown,
      onPointerMove: handleTrackPointerMove,
      onPointerUp: handleTrackPointerUp,
      onPointerCancel: handleTrackPointerUp,
    },
  };
}
