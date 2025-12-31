import { useDateRangePickerContext } from "../DateRangePickerProvider/useDateRangePickerProvider";

export function useDateRangePickerPopover() {
  const { isOpen, handleOpen } = useDateRangePickerContext();

  return { isOpen, handleOpen };
}
