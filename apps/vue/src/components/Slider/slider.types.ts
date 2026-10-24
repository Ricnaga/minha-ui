import type { SliderVariants } from '@/theme';

export type SliderInterval = [number, number];

export type SliderValue = number | SliderInterval;

export interface UseSliderProps extends SliderVariants {
  children?: unknown;
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
  min: number;
  max: number;
  step: number;
  size: 'sm' | 'md' | 'lg';
  color: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error';
  disabled: boolean;
  showValue: boolean;
  rootLabel?: string;
  values: number[];
  isRange: boolean;
  activeThumbIndex: any;
  trackRef: any;
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
