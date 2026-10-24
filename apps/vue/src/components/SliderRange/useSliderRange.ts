import { computed } from 'vue';

import { slider } from '@/theme';

import { useSlider } from '../Slider/useSlider';
import type { UseSliderRangeProps } from './slider-range.types';

export function useSliderRange(props: UseSliderRangeProps) {
  const { values, isRange, getPercent, size, color, disabled } = useSlider();

  const { range } = slider();

  const startPercent = computed(() => (isRange ? getPercent(values[0]) : 0));
  const endPercent = computed(() => getPercent(isRange ? values[1] : values[0]));

  const rangeProps = computed(() => ({
    'data-testid': 'slider-range',
    class: range({ size, color, disabled, class: props.class }),
    style: {
      left: `${startPercent.value}%`,
      width: `${Math.max(endPercent.value - startPercent.value, 0)}%`,
    },
  }));

  return { rangeProps };
}
