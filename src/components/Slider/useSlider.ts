import { createContext, useRef, useState } from 'react';
import type { KeyboardEvent, PointerEvent } from 'react';
import { useContext } from '@/hooks';
import { slider } from '@/theme';
import type {
  SliderContextProps,
  SliderValue,
  UseSliderProps,
} from './slider.types';
import {
  clamp,
  findNearestIndex,
  resolveSliderValue,
  valueToPercent,
} from './slider.utils';

export const SliderContext = createContext<SliderContextProps>(
  {} as SliderContextProps,
);

export function useSliderProvider(props: UseSliderProps) {
  const {
    children,
    value: controlledValue,
    defaultValue,
    min = 0,
    max = 100,
    step = 1,
    showValue = false,
    disabled = false,
    color = 'primary',
    size = 'md',
    'aria-label': ariaLabel,
    onValueChange,
  } = props;

  const [uncontrolledValue, setUncontrolledValue] = useState<SliderValue>(
    () => defaultValue ?? min,
  );
  const [activeThumbIndex, setActiveThumbIndex] = useState<number | null>(null);

  const trackRef = useRef<HTMLDivElement | null>(null);

  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : uncontrolledValue;
  const isRange = Array.isArray(currentValue);
  const values: number[] = isRange ? currentValue : [currentValue];

  const { root } = slider();

  function updateValue(nextValue: SliderValue) {
    if (!isControlled) setUncontrolledValue(nextValue);
    onValueChange?.(nextValue);
  }

  function getThumbValue(index: number): number {
    return values[index] ?? min;
  }

  function getPercent(value: number): number {
    return valueToPercent(value, min, max);
  }

  function handleThumbChange(index: number, rawValue: number) {
    updateValue(
      resolveSliderValue({ index, rawValue, values, isRange, min, max, step }),
    );
  }

  function updateFromClientX(clientX: number, index?: number) {
    const trackElement = trackRef.current;
    if (!trackElement) return;

    const rect = trackElement.getBoundingClientRect();
    if (rect.width === 0) return;

    const ratio = clamp((clientX - rect.left) / rect.width, 0, 1);
    const rawValue = min + ratio * (max - min);
    const targetIndex =
      index ?? (isRange ? findNearestIndex(values, rawValue) : 0);

    handleThumbChange(targetIndex, rawValue);
    setActiveThumbIndex(targetIndex);
  }

  function handleTrackPointerDown(event: PointerEvent<HTMLDivElement>) {
    if (disabled) return;
    if ((event.target as HTMLElement).closest('[role="slider"]')) return;

    event.currentTarget.setPointerCapture(event.pointerId);
    updateFromClientX(event.clientX);
  }

  function handleTrackPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (disabled || activeThumbIndex === null) return;

    updateFromClientX(event.clientX, activeThumbIndex);
  }

  function handleTrackPointerUp(event: PointerEvent<HTMLDivElement>) {
    releasePointerCapture(event);
    setActiveThumbIndex(null);
  }

  function handleThumbPointerDown(
    index: number,
    event: PointerEvent<HTMLDivElement>,
  ) {
    if (disabled) return;

    event.stopPropagation();
    event.currentTarget.setPointerCapture(event.pointerId);
    setActiveThumbIndex(index);
  }

  function handleThumbPointerMove(
    index: number,
    event: PointerEvent<HTMLDivElement>,
  ) {
    if (disabled || activeThumbIndex !== index) return;

    updateFromClientX(event.clientX, index);
  }

  function handleThumbPointerUp(event: PointerEvent<HTMLDivElement>) {
    releasePointerCapture(event);
    setActiveThumbIndex(null);
  }

  function handleThumbKeyDown(
    index: number,
    event: KeyboardEvent<HTMLDivElement>,
  ) {
    if (disabled) return;

    const currentValue = getThumbValue(index);

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowUp':
        event.preventDefault();
        handleThumbChange(index, currentValue + step);
        return;
      case 'ArrowLeft':
      case 'ArrowDown':
        event.preventDefault();
        handleThumbChange(index, currentValue - step);
        return;
      case 'Home':
        event.preventDefault();
        handleThumbChange(index, min);
        return;
      case 'End':
        event.preventDefault();
        handleThumbChange(index, max);
        return;
      default:
        return;
    }
  }

  return {
    children,
    rootProps: {
      role: 'group',
      'aria-label': ariaLabel,
      'data-testid': 'slider-root',
      className: root({ size, color, disabled }),
    },
    min,
    max,
    step,
    size,
    color,
    disabled,
    showValue,
    values,
    isRange,
    activeThumbIndex,
    trackRef,
    getThumbValue,
    getPercent,
    handleTrackPointerDown,
    handleTrackPointerMove,
    handleTrackPointerUp,
    handleThumbPointerDown,
    handleThumbPointerMove,
    handleThumbPointerUp,
    handleThumbKeyDown,
  };
}

function releasePointerCapture(event: PointerEvent<HTMLDivElement>) {
  const element = event.currentTarget;
  if (element.hasPointerCapture(event.pointerId)) {
    element.releasePointerCapture(event.pointerId);
  }
}

export function useSlider() {
  return useContext({
    context: SliderContext,
    hookName: useSlider.name,
    providerName: SliderContext.name,
  });
}
