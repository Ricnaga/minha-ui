import type { DatePickerProps, UseDatePickerProps } from './date-picker.types';

export function useDatePicker(props: UseDatePickerProps) {
  const datePickerProviderProps: DatePickerProps = { ...props };
  return { datePickerProviderProps };
}
