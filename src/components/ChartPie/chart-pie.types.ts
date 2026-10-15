import type { HTMLAttributes } from 'react';
import type { ChartPieVariants } from '@/theme';
import type { ChartDataPoint } from '../Chart';

export type PieColor = NonNullable<ChartPieVariants['color']>;

export interface ChartPieDataPoint extends ChartDataPoint {
  color?: PieColor;
}

export interface ChartPieSlice {
  label: string;
  value: number;
  percent: number;
  offset: number;
  color: PieColor;
}

export interface ChartPieLayout {
  size: number;
  center: number;
  radius: number;
  strokeWidth: number;
}

export interface UseChartPieProps extends HTMLAttributes<HTMLElement> {
  data: ChartPieDataPoint[];
  'aria-label'?: string;
  valueFormatter?: (value: number) => string;
}

export type ChartPieProps = UseChartPieProps;
