import type { Snippet } from 'svelte';

import type { SliderVariants } from '@/theme';

export type SliderInterval = [number, number];

export type SliderValue = number | SliderInterval;

export interface UseSliderProps extends SliderVariants {
  children?: Snippet;
  value?: SliderValue;
  defaultValue?: SliderValue;
  min?: number;
  max?: number;
  step?: number;
  showValue?: boolean;
  disabled?: boolean;
  'aria-label'?: string;
  onValueChange?: (value: SliderValue) => void;
}

export type SliderProps = UseSliderProps;

export type SliderContextProps = {
  readonly min: number;
  readonly max: number;
  readonly step: number;
  readonly size: 'sm' | 'md' | 'lg';
  readonly color: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error';
  readonly disabled: boolean;
  readonly showValue: boolean;
  readonly rootLabel?: string;
  readonly values: number[];
  readonly isRange: boolean;
  readonly activeThumbIndex: number | null;
  trackRef: { current: HTMLElement | null };
  getThumbValue: (index: number) => number;
  getPercent: (value: number) => number;
  handleTrackPointerDown: (event: PointerEvent) => void;
  handleTrackPointerMove: (event: PointerEvent) => void;
  handleTrackPointerUp: (event: PointerEvent) => void;
  handleThumbPointerDown: (index: number, event: PointerEvent) => void;
  handleThumbPointerMove: (index: number, event: PointerEvent) => void;
  handleThumbPointerUp: (event: PointerEvent) => void;
  handleThumbKeyDown: (index: number, event: KeyboardEvent) => void;
};
