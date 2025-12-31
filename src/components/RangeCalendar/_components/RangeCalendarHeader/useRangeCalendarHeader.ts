import type {
  RangeCalendarHeaderProps,
  UseRangeCalendarHeaderProps,
} from "./range-calendar-header.types";

export function useRangeCalendarHeader(props: UseRangeCalendarHeaderProps) {
  // TODO: Implement hook logic
  const rangeCalendarHeaderProps: RangeCalendarHeaderProps = {
    ...props,
  };

  return { rangeCalendarHeaderProps };
}
