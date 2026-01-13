import { useClickOutside } from "@/hooks";
import type { SelectOptions } from "src/components/Select/select.types";
import { useSelectContext } from "src/components/SelectProvider/useSelectProvider";

export function useSelectItem() {
  const { handleClose, options, handleSelectChange, selectOption } =
    useSelectContext();

  const containerRef = useClickOutside<HTMLDivElement>({
    enabled: true,
    onOutsideClick: handleClose,
  });

  function handleChangeItem(option: SelectOptions) {
    handleSelectChange(option);
  }

  function handleSelectedItem(option: SelectOptions) {
    return (
      selectOption && selectOption.some((value) => value.key === option.key)
    );
  }

  return {
    containerRef,
    options,
    handleChangeItem,
    handleSelectedItem,
  };
}
