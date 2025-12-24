import type { useCalendarProvider } from "./useCalendar";

export type UseCalendarProviderProps = {
  value?: Date | null;
  onDateChange: (date: Date | null) => void;
  locale?: "pt-BR";
};

export type CalendarProps = UseCalendarProviderProps;

export type CalendarContextProps = Omit<
  ReturnType<typeof useCalendarProvider>,
  "children"
>;
