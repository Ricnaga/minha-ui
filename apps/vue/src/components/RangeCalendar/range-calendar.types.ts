export type DateRange = {
  from: Date | null;
  to: Date | null;
};

export type UseRangeCalendarProviderProps = {
  value?: DateRange;
  onDateChange?: (range: DateRange) => void;
  locale?: 'pt-BR';
};

export type RangeCalendarProps = UseRangeCalendarProviderProps;

export interface RangeCalendarContextProps {
  value: DateRange;
  setRange: (date: Date) => void;
  currentMonth: Date;
  goToNextMonth: () => void;
  goToPrevMonth: () => void;
  locale?: 'pt-BR';
}
