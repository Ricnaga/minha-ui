export type UseCalendarProviderProps = {
  value?: Date | null;
  onDateChange: (date: Date | null) => void;
  locale?: 'pt-BR';
};

export type CalendarProps = UseCalendarProviderProps;

export interface CalendarContextProps {
  value?: Date | null;
  setValue: (date: Date) => void;
  currentMonth: Date;
  goToNextMonth: () => void;
  goToPrevMonth: () => void;
  locale?: 'pt-BR';
}
