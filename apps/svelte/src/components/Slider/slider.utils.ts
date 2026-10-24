import type { SliderValue } from './slider.types';

export function clamp(value: number, min: number, max: number): number {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

export function valueToPercent(value: number, min: number, max: number): number {
  if (max === min) return 0;
  return ((value - min) / (max - min)) * 100;
}

export function percentToValue(percent: number, min: number, max: number): number {
  return min + (percent / 100) * (max - min);
}

export function snapToStep(value: number, step: number): number {
  return Math.round(value / step) * step;
}

export function findNearestIndex(values: number[], target: number): number {
  let nearestIndex = 0;
  let minDistance = Math.abs(values[0] - target);

  for (let i = 1; i < values.length; i += 1) {
    const distance = Math.abs(values[i] - target);
    if (distance < minDistance) {
      minDistance = distance;
      nearestIndex = i;
    }
  }

  return nearestIndex;
}

export function resolveSliderValue(params: {
  index: number;
  rawValue: number;
  values: number[];
  isRange: boolean;
  min: number;
  max: number;
  step: number;
}): SliderValue {
  const { index, rawValue, values, isRange, min, max, step } = params;
  const snapped = snapToStep(rawValue, step);
  const clamped = clamp(snapped, min, max);

  if (!isRange) return clamped;

  const nextValues = [...values];
  nextValues[index] = clamped;

  if (index === 0 && nextValues[0] > nextValues[1]) {
    nextValues[0] = nextValues[1];
  }

  if (index === 1 && nextValues[1] < nextValues[0]) {
    nextValues[1] = nextValues[0];
  }

  return [nextValues[0], nextValues[1]];
}
