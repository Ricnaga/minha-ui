import type { DateRange } from "src/components/RangeCalendar/range-calendar.types";

export type UseRangeCalendarGridButtonProps = {
  day: Date;
  currentMonth: Date;
  value: DateRange;
  onDayChange: VoidFunction;
};

export type RangeCalendarGridButtonProps = UseRangeCalendarGridButtonProps;
