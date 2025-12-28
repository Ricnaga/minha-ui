import { useDatePickerContext } from "../DatePickerProvider/useDatePickerProvider";

export function useDatePickerPopover() {
  const { isOpen, handleOpen } = useDatePickerContext();

  return { isOpen, handleOpen };
}
