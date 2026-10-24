import type { ChartVariants } from '@/theme';

export type ChartType = 'bar' | 'line';

export interface ChartDataPoint {
  label: string;
  value: number;
}

export interface UseChartProps extends ChartVariants {
  type: ChartType;
  data: ChartDataPoint[];
  width?: number;
  height?: number;
  showGrid?: boolean;
  showAxis?: boolean;
  showValueLabels?: boolean;
  'aria-label'?: string;
  valueFormatter?: (value: number) => string;
  className?: string;
}

export type ChartProps = UseChartProps;

export interface ChartContextProps {
  type: ChartType;
  data: ChartDataPoint[];
  points: any[];
  margin: { top: number; right: number; bottom: number; left: number };
  innerWidth: number;
  innerHeight: number;
  ticks: number[];
  yScale: (value: number) => number;
  color: NonNullable<ChartVariants['color']>;
  showGrid: boolean;
  showAxis: boolean;
  showValueLabels: boolean;
  valueFormatter: (value: number) => string;
  ariaLabel: string;
}
