import { useChartBars } from './useChartBars';

export function ChartBars() {
  const { points, innerHeight, barProps } = useChartBars();

  return (
    <g data-part="bars">
      {points.map((point, index) => (
        <rect
          key={point.label}
          x={point.barX}
          y={point.y}
          width={point.barWidth}
          height={Math.max(innerHeight - point.y, 0)}
          rx={2}
          style={{ animationDelay: `${Math.min(index * 25, 200)}ms` }}
          {...barProps}
        />
      ))}
    </g>
  );
}
