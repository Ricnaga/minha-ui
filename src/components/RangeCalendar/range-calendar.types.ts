import type { useRangeCalendarProvider } from "./useRangeCalendar";

export type DateRange = {
  from: Date | null;
  to: Date | null;
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
