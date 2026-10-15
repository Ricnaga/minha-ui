import { createContext, type HTMLAttributes, type SVGProps } from 'react';
import { useContext } from '@/hooks';
import { chart } from '@/theme';
import {
  createBandScale,
  createLinearScale,
  getNiceTicks,
} from 'src/utils/chart';
import type { ChartContextProps, UseChartProps } from './chart.types';

const MARGIN = { top: 16, right: 16, bottom: 32, left: 44 };

export const ChartContext = createContext<ChartContextProps>(
  {} as ChartContextProps,
);

export function useChartProvider(props: UseChartProps) {
  const {
    type,
    data,
    width = 480,
    height = 280,
    color = 'sky',
    showGrid = false,
    showAxis = true,
    showValueLabels = false,
    valueFormatter = String,
    'aria-label': ariaLabel = 'Gráfico',
    className,
    ...rest
  } = props;

  const { root, svg } = chart();

  const innerWidth = width - MARGIN.left - MARGIN.right;
  const innerHeight = height - MARGIN.top - MARGIN.bottom;

  const maxValue = data.reduce((max, point) => Math.max(max, point.value), 0);
  const { min, max, ticks } = getNiceTicks(0, maxValue);

  const yScale = createLinearScale({
    domain: [min, max],
    range: [innerHeight, 0],
  });
  const xScale = createBandScale(data.length, [0, innerWidth]);

  const points = data.map((point, index) => ({
    ...point,
    x: xScale.center(index),
    y: yScale(point.value),
    barX: xScale.position(index),
    barWidth: xScale.bandwidth,
  }));

  const chartProps: HTMLAttributes<HTMLElement> = {
    ...rest,
    className: root({ className }),
  };

  const svgProps: SVGProps<SVGSVGElement> = {
    viewBox: `0 0 ${width} ${height}`,
    role: 'img',
    'aria-label': ariaLabel,
    className: svg(),
  };

  return {
    type,
    data,
    points,
    margin: MARGIN,
    innerWidth,
    innerHeight,
    ticks,
    yScale,
    color,
    showGrid,
    showAxis,
    showValueLabels,
    valueFormatter,
    ariaLabel,
    chartProps,
    svgProps,
  };
}

export function useChart() {
  return useContext({
    context: ChartContext,
    hookName: useChart.name,
    providerName: ChartContext.name,
  });
}
