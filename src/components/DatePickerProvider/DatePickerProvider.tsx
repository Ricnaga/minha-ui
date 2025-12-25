import type { DatePickerProviderProps } from "./date-picker-provider.types";
import { DatePickerProviderContext, useDatePickerProviderProvider } from "./useDatePickerProvider";

export function DatePickerProvider(props: DatePickerProviderProps) {
  const { children, ...rest } = useDatePickerProviderProvider(props);
  
  return (
    <DatePickerProviderContext.Provider value={rest}>
      {children}
    </DatePickerProviderContext.Provider>
  )
}
