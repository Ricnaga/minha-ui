import { slider } from '@/theme';

import { useSlider } from '../Slider/useSlider.svelte';
import type { UseSliderRangeProps } from './slider-range.types';

export function useSliderRange(getProps: () => UseSliderRangeProps) {
  const ctx = useSlider();
  const { range } = slider();

  return {
    get rangeProps() {
      const p = getProps() as Record<string, unknown>;
      const startPercent = ctx.isRange ? ctx.getPercent(ctx.values[0]) : 0;
      const endPercent = ctx.getPercent(ctx.isRange ? ctx.values[1] : ctx.values[0]);
      return {
        'data-testid': 'slider-range',
        class: range({ size: ctx.size, color: ctx.color, disabled: ctx.disabled, class: p.class as string | undefined } as Parameters<typeof range>[0]),
        style: `left: ${startPercent}%; width: ${Math.max(endPercent - startPercent, 0)}%;`,
      };
    },
  };
}
