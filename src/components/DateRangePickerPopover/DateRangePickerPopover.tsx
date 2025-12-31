import { DateRangePickerCalendar } from "../DateRangePickerCalendar";
import { DateRangePickerInput } from "../DateRangePickerInput";
import { Popover } from "../Popover";
import { PopoverContent } from "../PopoverContent";
import { PopoverTrigger } from "../PopoverTrigger";
import { useDateRangePickerPopover } from "./useDateRangePickerPopover";

export function DateRangePickerPopover() {
  const { handleOpen, isOpen } = useDateRangePickerPopover();

  return (
    <Popover isOpen={isOpen} onPopoverChange={handleOpen} shadow="xl">
      <PopoverTrigger>
        <DateRangePickerInput />
      </PopoverTrigger>
      <PopoverContent>
        <DateRangePickerCalendar />
      </PopoverContent>
    </Popover>
  );
}
