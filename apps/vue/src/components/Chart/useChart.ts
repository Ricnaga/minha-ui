import { inject, provide } from 'vue';

import { chart } from '@/theme';

import type { ChartContextProps, UseChartProps } from './chart.types';

const MARGIN = { top: 16, right: 16, bottom: 32, left: 44 };

export const ChartContextKey = Symbol('ChartContext');

function createLinearScale({ domain, range }: { domain: [number, number]; range: [number, number] }) {
  const [d0, d1] = domain;
  const [r0, r1] = range;
  const span = d1 - d0 || 1;
  const rSpan = r1 - r0;
  return (value: number) => r0 + ((value - d0) / span) * rSpan;
}

function createBandScale(count: number, range: [number, number], padding = 0.2) {
  const [r0, r1] = range;
  const step = count > 0 ? (r1 - r0) / count : 0;
  const bandwidth = step * (1 - padding);
  return {
    position: (index: number) => r0 + index * step + (step - bandwidth) / 2,
    center: (index: number) => r0 + index * step + step / 2,
    bandwidth,
  };
}

function getNiceTicks(min: number, max: number) {
  if (max <= min) return { min, max: min + 1, ticks: [min] };
  const range = max - min;
  const step = Math.pow(10, Math.floor(Math.log10(range)));
  const niceStep = step;
  const niceMin = Math.floor(min / niceStep) * niceStep;
  const niceMax = Math.ceil(max / niceStep) * niceStep;
  const ticks = [];
  for (let t = niceMin; t <= niceMax + 1e-9; t += niceStep) ticks.push(Number(t.toFixed(10)));
  return { min: niceMin, max: niceMax, ticks };
}

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

  const chartProps = {
    ...(rest as any),
    class: root({ className }),
  };

  const svgProps = {
    viewBox: `0 0 ${width} ${height}`,
    role: 'img',
    'aria-label': ariaLabel,
    class: svg(),
  };

  const context: ChartContextProps = {
    type,
    data,
    points,
    margin: MARGIN,
    innerWidth,
    innerHeight,
    ticks,
    yScale,
    color: color as NonNullable<typeof color>,
    showGrid,
    showAxis,
    showValueLabels,
    valueFormatter,
    ariaLabel,
  };

  provide(ChartContextKey, context);

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

export function useChart(): ChartContextProps {
  const context = inject<ChartContextProps>(ChartContextKey);
  if (!context) {
    throw new Error('useChart must be used within a ChartProvider');
  }
  return context;
}
