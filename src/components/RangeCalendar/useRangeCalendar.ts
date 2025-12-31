import { createContext, useState } from "react";
import { useContext } from "@/hooks";
import type {
  DateRange,
  RangeCalendarContextProps,
  UseRangeCalendarProviderProps,
} from "./range-calendar.types";

export const RangeCalendarContext = createContext<RangeCalendarContextProps>(
  {} as RangeCalendarContextProps
);

export function useRangeCalendarProvider(props: UseRangeCalendarProviderProps) {
  const { value: controlledValue, onDateChange, locale = "pt-BR" } = props;

  const [uncontrolledValue, setUncontrolledValue] = useState<DateRange>({
    start: null,
    end: null,
  });

  const value = controlledValue ?? uncontrolledValue;

  const [currentMonth, setCurrentMonth] = useState<Date>(
    value.start ?? new Date()
  );

  function setRange(date: Date) {
    // Se não tem start ou range já completo → reset
    if (!value.start || value.end) {
      const next = { start: date, end: null };
      onDateChange?.(next);
      setUncontrolledValue(next);
      return;
    }

    // start existe, ainda não tem end
    if (date < value.start) {
      // Inverte automaticamente
      const next = { start: date, end: value.start };
      onDateChange?.(next);
      setUncontrolledValue(next);
      return;
    }

    if (date.getTime() === value.start.getTime()) {
      // clicar na mesma data → range de 1 dia
      const next = { start: date, end: date };
      onDateChange?.(next);
      setUncontrolledValue(next);
      return;
    }

    // caso normal: data maior que start
    const next = { start: value.start, end: date };
    onDateChange?.(next);
    setUncontrolledValue(next);
  }

  function goToNextMonth() {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  }

  function goToPrevMonth() {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  }

  return {
    value,
    setRange,
    currentMonth,
    goToNextMonth,
    goToPrevMonth,
    locale,
  };
}

export function useRangeCalendar() {
  return useContext({
    context: RangeCalendarContext,
    hookName: useRangeCalendar.name,
    providerName: RangeCalendarContext.name,
  });
}
