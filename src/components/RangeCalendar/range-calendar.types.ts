import type { useRangeCalendarProvider } from "./useRangeCalendar";

export type DateRange = {
  start: Date | null;
  end: Date | null;
};

export type UseRangeCalendarProviderProps = {
  value?: DateRange;
  onDateChange?: (range: DateRange) => void;
  locale?: "pt-BR";
};

export type RangeCalendarProps = UseRangeCalendarProviderProps;

export type RangeCalendarContextProps = ReturnType<
  typeof useRangeCalendarProvider
>;
