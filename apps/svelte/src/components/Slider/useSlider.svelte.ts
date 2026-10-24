import { setContext } from 'svelte';

import { useContext } from '@/runes';
import { slider } from '@/theme';

import { clamp, findNearestIndex, resolveSliderValue, valueToPercent } from './slider.utils';
import type { SliderContextProps, SliderValue, UseSliderProps } from './slider.types';

export const sliderContext = Symbol('slider');

export function useSliderProvider(getProps: () => UseSliderProps) {
  const props = getProps() as Record<string, unknown>;
  const children = props.children;
  const controlledValue = props.value as SliderValue | undefined;
  const defaultValue = props.defaultValue as SliderValue | undefined;
  const min = (props.min as number) ?? 0;
  const max = (props.max as number) ?? 100;
  const step = (props.step as number) ?? 1;
  const showValue = (props.showValue as boolean) ?? false;
  const disabled = (props.disabled as boolean) ?? false;
  const color = ((props.color as string) ?? 'primary') as 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error';
  const size = ((props.size as string) ?? 'md') as 'sm' | 'md' | 'lg';
  const ariaLabel = props['aria-label'] as string | undefined;
  const onValueChange = props.onValueChange as ((v: SliderValue) => void) | undefined;

  let uncontrolledValue: SliderValue = defaultValue ?? min;
  let activeThumbIndex: number | null = $state(null);
  const trackRef: { current: HTMLElement | null } = { current: null };

  const isControlled = controlledValue !== undefined;
  function getCurrentValue(): SliderValue {
    return isControlled ? (controlledValue as SliderValue) : uncontrolledValue;
  }
  function isRangeValue(v: SliderValue): boolean {
    return Array.isArray(v);
  }
  function getValues(): number[] {
    const v = getCurrentValue();
    return isRangeValue(v) ? (v as number[]) : [v as number];
  }

  const { root } = slider();

  function updateValue(nextValue: SliderValue) {
    if (!isControlled) uncontrolledValue = nextValue;
    onValueChange?.(nextValue);
  }

  function getThumbValue(index: number): number {
    return getValues()[index] ?? min;
  }

  function getPercent(value: number): number {
    return valueToPercent(value as number, min as number, max as number);
  }

  function handleThumbChange(index: number, rawValue: number) {
    const current = getCurrentValue();
    updateValue(resolveSliderValue({ index, rawValue: rawValue as number, values: getValues(), isRange: isRangeValue(current), min: min as number, max: max as number, step: step as number }));
  }

  function updateFromClientX(clientX: number, index?: number) {
    const trackElement = trackRef.current;
    if (!trackElement) return;
    const rect = trackElement.getBoundingClientRect();
    if (rect.width === 0) return;
    const ratio = clamp((clientX - rect.left) / rect.width, 0, 1);
    const rawValue = (min as number) + ratio * ((max as number) - (min as number));
    const vals = getValues();
    const isR = isRangeValue(getCurrentValue());
    const targetIndex = index ?? (isR ? findNearestIndex(vals, rawValue) : 0);
    handleThumbChange(targetIndex, rawValue);
    activeThumbIndex = targetIndex;
  }

  function handleTrackPointerDown(event: PointerEvent) {
    if (disabled) return;
    const target = event.target as HTMLElement;
    if (target.closest('[role="slider"]')) return;
    (event.currentTarget as HTMLElement).setPointerCapture((event as PointerEvent & { pointerId: number }).pointerId);
    updateFromClientX((event as PointerEvent).clientX);
  }

  function handleTrackPointerMove(event: PointerEvent) {
    if (disabled || activeThumbIndex === null) return;
    updateFromClientX((event as PointerEvent).clientX, activeThumbIndex);
  }

  function handleTrackPointerUp(event: PointerEvent) {
    const el = event.currentTarget as HTMLElement;
    const pid = (event as PointerEvent & { pointerId: number }).pointerId;
    if (el.hasPointerCapture(pid)) el.releasePointerCapture(pid);
    activeThumbIndex = null;
  }

  function handleThumbPointerDown(index: number, event: PointerEvent) {
    if (disabled) return;
    event.stopPropagation();
    const el = event.currentTarget as HTMLElement;
    const pid = (event as PointerEvent & { pointerId: number }).pointerId;
    el.setPointerCapture(pid);
    activeThumbIndex = index;
  }

  function handleThumbPointerMove(index: number, event: PointerEvent) {
    if (disabled || activeThumbIndex !== index) return;
    updateFromClientX((event as PointerEvent).clientX, index);
  }

  function handleThumbPointerUp(event: PointerEvent) {
    const el = event.currentTarget as HTMLElement;
    const pid = (event as PointerEvent & { pointerId: number }).pointerId;
    if (el.hasPointerCapture(pid)) el.releasePointerCapture(pid);
    activeThumbIndex = null;
  }

  function handleThumbKeyDown(index: number, event: KeyboardEvent) {
    if (disabled) return;
    const currentValueThumb = getThumbValue(index);
    switch ((event as KeyboardEvent).key) {
      case 'ArrowRight':
      case 'ArrowUp':
        event.preventDefault();
        handleThumbChange(index, currentValueThumb + step);
        return;
      case 'ArrowLeft':
      case 'ArrowDown':
        event.preventDefault();
        handleThumbChange(index, currentValueThumb - step);
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

  const context: SliderContextProps = {
    get min() { return min; },
    get max() { return max; },
    get step() { return step; },
    get size() { return size; },
    get color() { return color; },
    get disabled() { return disabled; },
    get showValue() { return showValue; },
    get rootLabel() { return ariaLabel; },
    get values() { return getValues(); },
    get isRange() { return isRangeValue(getCurrentValue()); },
    get activeThumbIndex() { return activeThumbIndex; },
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
  } as SliderContextProps;

  setContext(sliderContext, context);

  return {
    children,
    rootProps: {
      role: 'group',
      'aria-label': ariaLabel,
      'data-testid': 'slider-root',
      class: root({ size, color, disabled }),
    },
  };
}

export function useSlider(): SliderContextProps {
  return useContext<SliderContextProps>({
    context: sliderContext,
    hookName: useSlider.name,
    providerName: 'Slider',
  });
}
