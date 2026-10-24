import { chartPie } from '@/theme';

import type { ChartPieLayout, ChartPieSlice, PieColor, UseChartPieProps } from './chart-pie.types';

const ALL_COLORS: PieColor[] = ['sky', 'emerald', 'amber', 'violet', 'red'];

const LAYOUT: ChartPieLayout = {
  size: 200,
  center: 100,
  radius: 76,
  strokeWidth: 24,
};

export function useChartPie(props: UseChartPieProps) {
  const {
    data,
    valueFormatter = String,
    'aria-label': ariaLabel = 'Gráfico de pizza',
    className,
    ...rest
  } = props;

  const { root, svg } = chartPie();

  const total = data.reduce((sum, point) => sum + point.value, 0);

  let cumulative = 0;
  const slices: ChartPieSlice[] = data.map((point, index) => {
    const fraction = total > 0 ? point.value / total : 0;
    const offset = cumulative * 100;
    cumulative += fraction;

    return {
      label: point.label,
      value: point.value,
      percent: fraction * 100,
      offset,
      color: point.color ?? ALL_COLORS[index % ALL_COLORS.length],
    };
  });

  const figureProps = {
    ...(rest as any),
    class: root({ className }),
  };

  const svgProps = {
    viewBox: `0 0 ${LAYOUT.size} ${LAYOUT.size}`,
    role: 'img',
    'aria-label': ariaLabel,
    class: svg(),
  };

  return {
    data,
    slices,
    layout: LAYOUT,
    valueFormatter,
    ariaLabel,
    figureProps,
    svgProps,
  };
}
