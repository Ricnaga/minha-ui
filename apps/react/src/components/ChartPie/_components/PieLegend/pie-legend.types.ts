import type { ChartPieSlice } from '../../chart-pie.types';

export interface UsePieLegendProps {
  slices: ChartPieSlice[];
  valueFormatter: (value: number) => string;
}

export type PieLegendProps = UsePieLegendProps;
