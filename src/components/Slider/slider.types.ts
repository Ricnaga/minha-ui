import type { RequiredChildren } from '@/types';
import type { SliderVariants } from '@/theme';
import type { useSliderProvider } from './useSlider';

export type SliderInterval = [number, number];

export type SliderValue = number | SliderInterval;

export type UseSliderProps = SliderVariants &
  RequiredChildren<{
    value?: SliderValue;
    defaultValue?: SliderValue;
    min?: number;
    max?: number;
    step?: number;
    showValue?: boolean;
    'aria-label'?: string;
    onValueChange?: (value: SliderValue) => void;
  }>;

export type SliderProps = UseSliderProps;

export type SliderContextProps = Omit<
  ReturnType<typeof useSliderProvider>,
  'children' | 'rootProps'
>;
