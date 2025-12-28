import { DatePickerCalendar } from "../DatePickerCalendar";
import { DatePickerInput } from "../DatePickerInput";
import { Popover } from "../Popover";
import { PopoverContent } from "../PopoverContent";
import { PopoverTrigger } from "../PopoverTrigger";
import { useDatePickerPopover } from "./useDatePickerPopover";

export function DatePickerPopover() {
  const { isOpen, handleOpen } = useDatePickerPopover();
  
  return (
    <Popover isOpen={isOpen} onPopoverChange={handleOpen} shadow="xl">
      <PopoverTrigger>
        <DatePickerInput />
      </PopoverTrigger>
      <PopoverContent>
        <DatePickerCalendar />
      </PopoverContent>
    </Popover>
  );
}
