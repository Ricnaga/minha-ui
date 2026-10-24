import { useToggle } from '../useToggle';

export function useDisclosure(isTruthy: boolean = false) {
  const { handleClose, handleOpen, handleToggle, isToggle, setAsToggle } =
    useToggle(isTruthy);

  return {
    get isOpen() {
      return isToggle;
    },
    handleClose,
    handleOpen,
    handleToggle,
    setAsOpen: setAsToggle,
  };
}
