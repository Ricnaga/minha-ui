import { useSelectContext } from "../SelectProvider/useSelectProvider";

export function useSelectDropdown() {
  const { isOpen, handleOpen } = useSelectContext();

  return { isOpen, handleOpen };
}
