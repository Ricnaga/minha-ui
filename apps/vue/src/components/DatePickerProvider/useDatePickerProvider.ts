import { inject, provide } from 'vue';

import { useToggle } from '@/composables';

import type { DatePickerProviderContextProps, UseDatePickerProviderProps } from './date-picker-provider.types';

export const DatePickerProviderContextKey = Symbol('DatePickerProviderContext');

export function useDatePickerProvider(props: UseDatePickerProviderProps) {
  const { onDateChange } = props;
  const { isToggle: isOpen, handleClose, handleOpen } = useToggle();

  function handleCalendarChange(value: Date | null) {
    onDateChange(value);
  }

  const { children, ...rest } = props;

  const context = {
    children,
    isOpen: isOpen.value,
    handleClose,
    handleOpen,
    handleCalendarChange,
    ...rest,
  } as DatePickerProviderContextProps;

  provide(DatePickerProviderContextKey, context);

  return context;
}

export function useDatePickerContext(): DatePickerProviderContextProps {
  const context = inject<DatePickerProviderContextProps>(DatePickerProviderContextKey);
  if (!context) {
    throw new Error('useDatePickerContext must be used within a DatePickerProvider');
  }
  return context;
}
