import { inject, provide } from 'vue';

import { useToggle } from '@/composables';

import type { DateRange } from '../RangeCalendar';
import type { DateRangePickerProviderContextProps, UseDateRangePickerProviderProps } from './date-range-picker-provider.types';

export const DateRangePickerProviderContextKey = Symbol('DateRangePickerProviderContext');

export function useDateRangePickerProvider(props: UseDateRangePickerProviderProps) {
  const { onRangeDateChange } = props;
  const { isToggle: isOpen, handleClose, handleOpen } = useToggle();

  function handleRangeCalendarChange(value: DateRange | null) {
    onRangeDateChange(value);

    if (value?.from && value?.to) {
      handleClose();
    }
  }

  const { children, ...rest } = props;

  const context = {
    children,
    isOpen: isOpen.value,
    handleClose,
    handleOpen,
    handleRangeCalendarChange,
    ...rest,
  } as DateRangePickerProviderContextProps;

  provide(DateRangePickerProviderContextKey, context);

  return context;
}

export function useDateRangePickerContext(): DateRangePickerProviderContextProps {
  const context = inject<DateRangePickerProviderContextProps>(DateRangePickerProviderContextKey);
  if (!context) {
    throw new Error('useDateRangePickerContext must be used within a DateRangePickerProvider');
  }
  return context;
}
