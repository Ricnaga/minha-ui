import { inject, provide } from 'vue';

import type { CalendarContextProps, UseCalendarProviderProps } from './calendar.types';

export const CalendarContextKey = Symbol('CalendarContext');

let _currentMonth: Date = new Date();
let _uncontrolledValue: Date | null = null;

export function useCalendarProvider(props: UseCalendarProviderProps) {
  const { value: controlledValue, onDateChange, locale = 'pt-BR' } = props;

  const value = controlledValue !== undefined ? controlledValue : _uncontrolledValue;

  if (!(_currentMonth instanceof Date)) _currentMonth = value ? new Date(value) : new Date();

  function setValue(date: Date) {
    onDateChange?.(date);
    _uncontrolledValue = date;
  }

  function goToNextMonth() {
    _currentMonth = new Date(_currentMonth.getFullYear(), _currentMonth.getMonth() + 1, 1);
  }

  function goToPrevMonth() {
    _currentMonth = new Date(_currentMonth.getFullYear(), _currentMonth.getMonth() - 1, 1);
  }

  const context: CalendarContextProps = {
    value,
    setValue,
    currentMonth: _currentMonth,
    goToNextMonth,
    goToPrevMonth,
    locale,
  };

  provide(CalendarContextKey, context);

  return context;
}

export function useCalendar(): CalendarContextProps {
  const context = inject<CalendarContextProps>(CalendarContextKey);
  if (!context) {
    throw new Error('useCalendar must be used within a CalendarProvider');
  }
  return context;
}
