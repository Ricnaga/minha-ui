import { PieLegend } from './_components/PieLegend';
import { PieSlices } from './_components/PieSlices';
import type { ChartPieProps } from './chart-pie.types';
import { useChartPie } from './useChartPie';

export function ChartPie(props: ChartPieProps) {
  const {
    figureProps,
    svgProps,
    layout,
    slices,
    data,
    valueFormatter,
    ariaLabel,
  } = useChartPie(props);

  return (
    <figure {...figureProps}>
      <svg {...svgProps}>
        <title>{ariaLabel}</title>
        <PieSlices slices={slices} layout={layout} />
      </svg>
      <PieLegend slices={slices} valueFormatter={valueFormatter} />
      <table className="sr-only">
        <caption>{ariaLabel}</caption>
        <thead>
          <tr>
            <th scope="col">Categoria</th>
            <th scope="col">Valor</th>
          </tr>
        </thead>
        <tbody>
          {data.map((point) => (
            <tr key={point.label}>
              <th scope="row">{point.label}</th>
              <td>{valueFormatter(point.value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
