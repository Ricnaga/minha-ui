import type { DatePickerProviderProps } from "./date-picker-provider.types";
import {
  DatePickerProviderContext,
  useDatePickerProvider,
} from "./useDatePickerProvider";

export function DatePickerProvider(props: DatePickerProviderProps) {
  const { children, ...rest } = useDatePickerProvider(props);

  return (
    <DatePickerProviderContext.Provider value={rest}>
      {children}
    </DatePickerProviderContext.Provider>
  );
}
