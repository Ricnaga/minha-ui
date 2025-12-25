import type { DatePickerProps } from "./date-picker.types";
import { DatePickerProvider } from "../DatePickerProvider";
import { useDatePicker } from "./useDatePicker";
import { DatePickerInput } from "../DatePickerInput";
import { Popover } from "../Popover";
import { PopoverTrigger } from "../PopoverTrigger";
import { PopoverContent } from "../PopoverContent";
import { DatePickerCalendar } from "../DatePickerCalendar";

export function DatePicker(props: DatePickerProps) {
  const { datePickerProviderProps } = useDatePicker(props);

  return (
    <DatePickerProvider {...datePickerProviderProps}>
      <Popover isOpen={true} onPopoverChange={() => {}} shadow="xl">
        <PopoverTrigger>
          <DatePickerInput />
        </PopoverTrigger>
        <PopoverContent>
          <DatePickerCalendar />
        </PopoverContent>
      </Popover>
    </DatePickerProvider>
  );
}
