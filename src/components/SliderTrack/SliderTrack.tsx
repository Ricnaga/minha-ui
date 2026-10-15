import type { SliderTrackProps } from './slider-track.types';
import { useSliderTrack } from './useSliderTrack';

export function SliderTrack({ children, className }: SliderTrackProps) {
  const { trackRef, trackProps } = useSliderTrack({ children, className });

  return (
    <div ref={trackRef} {...trackProps}>
      {children}
    </div>
  );
}
