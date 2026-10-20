import { useClickAway } from '@/hooks';
import { useAutoCompleteContext } from '../AutoCompleteProvider/useAutoCompleteProvider';

export function useAutoCompleteDropdown() {
  const { isOpen, handleOpen, handleClose, isMultiple } =
    useAutoCompleteContext();

  const containerRef = useClickAway<HTMLDivElement>({
    enabled: isOpen,
    onOutsideClick: handleClose,
  });

  return { isOpen, handleOpen, containerRef, isMultiple };
}
