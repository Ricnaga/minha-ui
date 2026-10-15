import type { HTMLAttributes } from 'react';
import type { ChartVariants } from '@/theme';
import type { useChartProvider } from './useChart';

export type ChartType = 'bar' | 'line';

export interface ChartDataPoint {
  label: string;
  value: number;
}

export interface UseChartProps
  extends Omit<HTMLAttributes<HTMLElement>, 'color'>, ChartVariants {
  type: ChartType;
  data: ChartDataPoint[];
  width?: number;
  height?: number;
  showGrid?: boolean;
  showAxis?: boolean;
  showValueLabels?: boolean;
  'aria-label'?: string;
  valueFormatter?: (value: number) => string;
}

export type ChartProps = UseChartProps;

export type ChartContextProps = Omit<
  ReturnType<typeof useChartProvider>,
  | 'chartProps'
  | 'svgProps'
  | 'type'
  | 'margin'
  | 'showGrid'
  | 'showAxis'
  | 'showValueLabels'
>;
