import type { SliderValue } from './slider.types';

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function resolvePrecision(step: number): number {
  const decimals = String(step).split('.')[1];
  return decimals ? decimals.length : 0;
}

export function roundToStep(value: number, min: number, step: number): number {
  if (step <= 0) return value;

  const steps = Math.round((value - min) / step);
  const precision = resolvePrecision(step);
  const factor = 10 ** precision;

  return Math.round((min + steps * step) * factor) / factor;
}

export function valueToPercent(
  value: number,
  min: number,
  max: number,
): number {
  if (max === min) return 0;

  return ((value - min) / (max - min)) * 100;
}

export function findNearestIndex(values: number[], target: number): number {
  return values.reduce((closestIndex, value, index) => {
    const closestDistance = Math.abs(values[closestIndex] - target);
    const currentDistance = Math.abs(value - target);

    return currentDistance < closestDistance ? index : closestIndex;
  }, 0);
}

interface ResolveSliderValueOptions {
  index: number;
  rawValue: number;
  values: number[];
  isRange: boolean;
  min: number;
  max: number;
  step: number;
}

export function resolveSliderValue({
  index,
  rawValue,
  values,
  isRange,
  min,
  max,
  step,
}: ResolveSliderValueOptions): SliderValue {
  const nextValue = clamp(roundToStep(rawValue, min, step), min, max);

  if (!isRange) return nextValue;

  const [lowerValue, upperValue] = values;

  if (index === 0) return [Math.min(nextValue, upperValue), upperValue];

  return [lowerValue, Math.max(nextValue, lowerValue)];
}
