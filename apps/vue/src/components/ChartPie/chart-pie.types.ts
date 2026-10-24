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

export interface UseChartPieProps {
  data: ChartPieDataPoint[];
  'aria-label'?: string;
  valueFormatter?: (value: number) => string;
  className?: string;
}

export type ChartPieProps = UseChartPieProps;

export interface UsePieSlicesProps {
  slices: ChartPieSlice[];
  layout: ChartPieLayout;
}

export type PieSlicesProps = UsePieSlicesProps;

export interface UsePieLegendProps {
  slices: ChartPieSlice[];
  valueFormatter: (value: number) => string;
}

export type PieLegendProps = UsePieLegendProps;
