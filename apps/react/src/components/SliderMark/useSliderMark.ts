import { slider } from '@/theme';
import { useSlider } from '../Slider/useSlider';
import type { UseSliderMarkProps } from './slider-mark.types';

export function useSliderMark({ value, label, className }: UseSliderMarkProps) {
  const { getPercent, size, disabled } = useSlider();

  const { mark, markLabel } = slider();

  const percent = getPercent(value);

  return {
    label,
    markProps: {
      'data-testid': `slider-mark-${value}`,
      className: mark({ size, disabled, className }),
      style: { left: `${percent}%` },
    },
    labelProps: {
      'data-testid': `slider-mark-label-${value}`,
      className: markLabel({ size, disabled }),
      style: { left: `${percent}%` },
    },
  };
}
