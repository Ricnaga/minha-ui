import { Popover } from "../Popover";
import { SelectInput } from "./_components/SelectInput";
import { SelectItem } from "./_components/SelectItem";

import { useSelectDropdown } from "./useSelectDropdown";

export function SelectDropdown() {
  const { isOpen, handleOpen } = useSelectDropdown();

  return (
    <Popover
      isOpen={isOpen}
      onPopoverChange={handleOpen}
      padding="sm"
      width="trigger"
    >
      <SelectInput />
      <SelectItem />
    </Popover>
  );
}
