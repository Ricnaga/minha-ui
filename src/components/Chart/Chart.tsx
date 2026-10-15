import { ChartAxis } from './_components/ChartAxis';
import { ChartBars } from './_components/ChartBars';
import { ChartGrid } from './_components/ChartGrid';
import { ChartLine } from './_components/ChartLine';
import { ChartValueLabels } from './_components/ChartValueLabels';
import type { ChartProps } from './chart.types';
import { ChartContext, useChartProvider } from './useChart';

export function Chart(props: ChartProps) {
  const {
    chartProps,
    svgProps,
    type,
    showGrid,
    showAxis,
    showValueLabels,
    margin,
    ...context
  } = useChartProvider(props);

  return (
    <figure {...chartProps}>
      <svg {...svgProps}>
        <title>{context.ariaLabel}</title>
        <ChartContext.Provider value={context}>
          <g transform={`translate(${margin.left} ${margin.top})`}>
            {showGrid && <ChartGrid />}
            {showAxis && <ChartAxis orientation="y" />}
            {showAxis && <ChartAxis orientation="x" />}
            {type === 'bar' ? <ChartBars /> : <ChartLine />}
            {showValueLabels && <ChartValueLabels />}
          </g>
        </ChartContext.Provider>
      </svg>
      <table className="sr-only">
        <caption>{context.ariaLabel}</caption>
        <thead>
          <tr>
            <th scope="col">Categoria</th>
            <th scope="col">Valor</th>
          </tr>
        </thead>
        <tbody>
          {context.data.map((point) => (
            <tr key={point.label}>
              <th scope="row">{point.label}</th>
              <td>{context.valueFormatter(point.value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
