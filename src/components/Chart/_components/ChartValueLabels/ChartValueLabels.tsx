import { useChartValueLabels } from './useChartValueLabels';

export function ChartValueLabels() {
  const { points, valueFormatter, labelProps } = useChartValueLabels();

  return (
    <g data-part="value-labels">
      {points.map((point) => (
        <text
          key={point.label}
          x={point.x}
          y={point.y - 8}
          textAnchor="middle"
          {...labelProps}
        >
          {valueFormatter(point.value)}
        </text>
      ))}
    </g>
  );
}
