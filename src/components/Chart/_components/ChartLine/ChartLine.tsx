import { useChartLine } from './useChartLine';

export function ChartLine() {
  const { points, coordinates, lineProps, pointProps } = useChartLine();

  return (
    <g data-part="line">
      <polyline points={coordinates} pathLength={1} {...lineProps} />
      {points.map((point, index) => (
        <circle
          key={point.label}
          cx={point.x}
          cy={point.y}
          r={3}
          style={{ animationDelay: `${100 + index * 60}ms` }}
          {...pointProps}
        />
      ))}
    </g>
  );
}
