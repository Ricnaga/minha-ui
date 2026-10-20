import type { ChartPieLayout, ChartPieSlice } from '../../chart-pie.types';

export interface UsePieSlicesProps {
  slices: ChartPieSlice[];
  layout: ChartPieLayout;
}

export type PieSlicesProps = UsePieSlicesProps;
