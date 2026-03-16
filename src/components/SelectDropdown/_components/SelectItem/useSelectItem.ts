import { useClickOutside } from "@/hooks";
import type { SelectOptions } from "src/components/Select/select.types";
import { useSelectContext } from "src/components/SelectProvider/useSelectProvider";

export function useSelectItem() {
  const { handleClose, options, handleSelectChange, selectedOptions } =
    useSelectContext();

  const containerRef = useClickOutside<HTMLDivElement>({
    enabled: true,
    onOutsideClick: handleClose,
  });

  function handleChangeItem(option: SelectOptions) {
    handleSelectChange(option);
  }

  function handleSelectedItem(option: SelectOptions) {
    return selectedOptions.has(option.key.toString());
  }

  return {
    containerRef,
    options,
    handleChangeItem,
    handleSelectedItem,
  };
}
