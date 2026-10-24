import { computed } from 'vue';

import { slider } from '@/theme';

import { useSlider } from '../Slider/useSlider';
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

export function useSliderThumb(props: UseSliderThumbProps) {
  const { index = 0, class: className, 'aria-label': ariaLabel } = props;

  const {
    values,
    min,
    max,
    size,
    color,
    disabled,
    showValue,
    activeThumbIndex,
    rootLabel,
    isRange,
    getPercent,
    handleThumbPointerDown,
    handleThumbPointerMove,
    handleThumbPointerUp,
    handleThumbKeyDown,
  } = useSlider();

  const { thumb, bubble } = slider();

  const value = computed(() => values[index] ?? min);
  const active = computed(() => (activeThumbIndex as any).value !== undefined ? (activeThumbIndex as any).value : activeThumbIndex);
  const isDragging = computed(() => active.value === index);

  const accessibleName = computed(() =>
    getThumbAccessibleName({ ariaLabel, isRange, index, rootLabel })
  );

  const thumbProps = computed(() => ({
    role: 'slider',
    tabindex: disabled ? -1 : 0,
    'aria-valuemin': min,
    'aria-valuemax': max,
    'aria-valuenow': value.value,
    'aria-label': accessibleName.value,
    'aria-disabled': disabled,
    'data-testid': `slider-thumb-${index}`,
    'data-dragging': isDragging.value,
    class: thumb({ size, color, disabled, class: className }),
    style: { left: `${getPercent(value.value)}%` },
    onPointerdown: (event: PointerEvent) => handleThumbPointerDown(index, event),
    onPointermove: (event: PointerEvent) => handleThumbPointerMove(index, event),
    onPointerup: handleThumbPointerUp,
    onPointercancel: handleThumbPointerUp,
    onKeydown: (event: KeyboardEvent) => handleThumbKeyDown(index, event),
  }));

  const bubbleProps = computed(() => ({
    'aria-hidden': true,
    'data-testid': `slider-thumb-bubble-${index}`,
    class: bubble({ size, color }),
  }));

  return { showValue, valueLabel: value, thumbProps, bubbleProps };
}
