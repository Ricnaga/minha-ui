import { inject, provide } from 'vue';

import type { DateRange, RangeCalendarContextProps, UseRangeCalendarProviderProps } from './range-calendar.types';

export const RangeCalendarContextKey = Symbol('RangeCalendarContext');

let _uncontrolledValue: DateRange = { from: null, to: null };
let _currentMonth: Date = new Date();

export function useRangeCalendarProvider(props: UseRangeCalendarProviderProps) {
  const { value: controlledValue, onDateChange, locale = 'pt-BR' } = props;

  const value = controlledValue ?? _uncontrolledValue;
  if (!(value.from instanceof Date)) _currentMonth = value.from ? new Date(value.from) : _currentMonth;

  function setRange(date: Date) {
    if (!value.from || value.to) {
      const next: DateRange = { from: date, to: null };
      onDateChange?.(next);
      _uncontrolledValue = next;
      return;
    }
    if (date < value.from) {
      const next: DateRange = { from: date, to: value.from };
      onDateChange?.(next);
      _uncontrolledValue = next;
      return;
    }
    if (date.getTime() === value.from.getTime()) {
      const next: DateRange = { from: date, to: date };
      onDateChange?.(next);
      _uncontrolledValue = next;
      return;
    }
    const next: DateRange = { from: value.from, to: date };
    onDateChange?.(next);
    _uncontrolledValue = next;
  }

  function goToNextMonth() {
    _currentMonth = new Date(_currentMonth.getFullYear(), _currentMonth.getMonth() + 1, 1);
  }

  function goToPrevMonth() {
    _currentMonth = new Date(_currentMonth.getFullYear(), _currentMonth.getMonth() - 1, 1);
  }

  const context: RangeCalendarContextProps = {
    value,
    setRange,
    currentMonth: _currentMonth,
    goToNextMonth,
    goToPrevMonth,
    locale,
  };

  provide(RangeCalendarContextKey, context);
  return context;
}

export function useRangeCalendar(): RangeCalendarContextProps {
  const context = inject<RangeCalendarContextProps>(RangeCalendarContextKey);
  if (!context) {
    throw new Error('useRangeCalendar must be used within a RangeCalendarProvider');
  }
  return context;
}
