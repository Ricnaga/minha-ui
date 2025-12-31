import type { DateRangePickerProviderProps } from "./date-range-picker-provider.types";
import { DateRangePickerProviderContext, useDateRangePickerProvider } from "./useDateRangePickerProvider";

export function DateRangePickerProvider(props: DateRangePickerProviderProps) {
  const { children, ...rest } = useDateRangePickerProvider(props);
  
  return (
    <DateRangePickerProviderContext.Provider value={rest}>
      {children}
    </DateRangePickerProviderContext.Provider>
  )
}
