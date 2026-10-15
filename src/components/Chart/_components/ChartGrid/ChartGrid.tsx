import { useChartGrid } from './useChartGrid';

export function ChartGrid() {
  const { lines, innerWidth, lineProps } = useChartGrid();

  return (
    <g data-part="grid">
      {lines.map(({ tick, y }) => (
        <line key={tick} x1={0} x2={innerWidth} y1={y} y2={y} {...lineProps} />
      ))}
    </g>
  );
}
