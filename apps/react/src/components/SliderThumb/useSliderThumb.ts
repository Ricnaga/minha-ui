import type { KeyboardEvent, PointerEvent } from 'react';
import { slider } from '@/theme';
import { useSlider } from '../Slider/useSlider';
import type { UseSliderThumbProps } from './slider-thumb.types';

interface ThumbAccessibleNameParams {
  ariaLabel?: string;
  isRange: boolean;
  index: number;
  rootLabel?: string;
}

function getThumbAccessibleName({
  ariaLabel,
  isRange,
  index,
  rootLabel,
}: ThumbAccessibleNameParams): string {
  if (ariaLabel) return ariaLabel;
  if (isRange) return index === 0 ? 'Valor mínimo' : 'Valor máximo';
  return rootLabel ?? 'Valor';
}

export function useSliderThumb(props: UseSliderThumbProps) {
  const { index = 0, className, 'aria-label': ariaLabel } = props;

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

  const value = values[index] ?? min;
  const isDragging = activeThumbIndex === index;

  const accessibleName = getThumbAccessibleName({
    ariaLabel,
    isRange,
    index,
    rootLabel,
  });

  return {
    showValue,
    valueLabel: value,
    thumbProps: {
      role: 'slider',
      tabIndex: disabled ? -1 : 0,
      'aria-valuemin': min,
      'aria-valuemax': max,
      'aria-valuenow': value,
      'aria-label': accessibleName,
      'aria-disabled': disabled,
      'data-testid': `slider-thumb-${index}`,
      'data-dragging': isDragging,
      className: thumb({ size, color, disabled, className }),
      style: { left: `${getPercent(value)}%` },
      onPointerDown: (event: PointerEvent<HTMLDivElement>) =>
        handleThumbPointerDown(index, event),
      onPointerMove: (event: PointerEvent<HTMLDivElement>) =>
        handleThumbPointerMove(index, event),
      onPointerUp: handleThumbPointerUp,
      onPointerCancel: handleThumbPointerUp,
      onKeyDown: (event: KeyboardEvent<HTMLDivElement>) =>
        handleThumbKeyDown(index, event),
    },
    bubbleProps: {
      'aria-hidden': true,
      'data-testid': `slider-thumb-bubble-${index}`,
      className: bubble({ size, color }),
    },
  };
}
