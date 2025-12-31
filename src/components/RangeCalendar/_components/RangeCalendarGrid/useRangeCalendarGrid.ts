import type {
  RangeCalendarGridProps,
  UseRangeCalendarGridProps,
} from "./range-calendar-grid.types";

export function useRangeCalendarGrid(props: UseRangeCalendarGridProps) {
  // TODO: Implement hook logic
  const rangeCalendarGridProps: RangeCalendarGridProps = {
    ...props,
  };

  return { rangeCalendarGridProps };
}
