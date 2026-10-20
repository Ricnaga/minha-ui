import { slider } from '@/theme';
import { useSlider } from '../Slider/useSlider';
import type { UseSliderRangeProps } from './slider-range.types';

export function useSliderRange(props: UseSliderRangeProps) {
  const { values, isRange, getPercent, size, color, disabled } = useSlider();

  const { range } = slider();

  const startPercent = isRange ? getPercent(values[0]) : 0;
  const endPercent = getPercent(isRange ? values[1] : values[0]);

  return {
    rangeProps: {
      'data-testid': 'slider-range',
      className: range({ size, color, disabled, className: props.className }),
      style: {
        left: `${startPercent}%`,
        width: `${Math.max(endPercent - startPercent, 0)}%`,
      },
    },
  };
}
