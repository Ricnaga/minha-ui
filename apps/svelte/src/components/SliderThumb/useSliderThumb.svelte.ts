import { slider } from '@/theme';

import { useSlider } from '../Slider/useSlider.svelte';
import type { UseSliderThumbProps } from './slider-thumb.types';

function getThumbAccessibleName(params: {
  ariaLabel?: string;
  isRange: boolean;
  index: number;
  rootLabel?: string;
}): string {
  if (params.ariaLabel) return params.ariaLabel;
  if (params.isRange) return params.index === 0 ? 'Valor mínimo' : 'Valor máximo';
  return params.rootLabel ?? 'Valor';
}

export function useSliderThumb(getProps: () => UseSliderThumbProps) {
  const ctx = useSlider();
  const { thumb, bubble } = slider();

  return {
    get showValue() { return ctx.showValue; },
    get valueLabel() {
      const p = getProps() as Record<string, unknown>;
      const index = (p.index as number) ?? 0;
      return ctx.values[index] ?? ctx.min;
    },
    get thumbProps() {
      const p = getProps() as Record<string, unknown>;
      const index = (p.index as number) ?? 0;
      const className = p.class as string | undefined;
      const ariaLabel = p['aria-label'] as string | undefined;
      const value = ctx.values[index] ?? ctx.min;
      const isDragging = ctx.activeThumbIndex === index;
      const accessibleName = getThumbAccessibleName({ ariaLabel, isRange: ctx.isRange, index, rootLabel: ctx.rootLabel });
      return {
        role: 'slider',
        tabindex: ctx.disabled ? -1 : 0,
        'aria-valuemin': ctx.min,
        'aria-valuemax': ctx.max,
        'aria-valuenow': value,
        'aria-label': accessibleName,
        'aria-disabled': ctx.disabled,
        'data-testid': `slider-thumb-${index}`,
        'data-dragging': isDragging,
        class: thumb({ size: ctx.size, color: ctx.color, disabled: ctx.disabled, class: className }),
        style: `left: ${ctx.getPercent(value)}%;`,
        onpointerdown: (event: PointerEvent) => ctx.handleThumbPointerDown(index, event),
        onpointermove: (event: PointerEvent) => ctx.handleThumbPointerMove(index, event),
        onpointerup: ctx.handleThumbPointerUp,
        onpointercancel: ctx.handleThumbPointerUp,
        onkeydown: (event: KeyboardEvent) => ctx.handleThumbKeyDown(index, event),
      };
    },
    get bubbleProps() {
      return {
        'aria-hidden': true,
        'data-testid': `slider-thumb-bubble-${0}`,
        class: bubble({ size: ctx.size, color: ctx.color }),
      };
    },
  };
}
