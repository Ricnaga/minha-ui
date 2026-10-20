import type { SliderRangeProps } from './slider-range.types';
import { useSliderRange } from './useSliderRange';

export function SliderRange({ className }: SliderRangeProps) {
  const { rangeProps } = useSliderRange({ className });

  return <div {...rangeProps} />;
}
