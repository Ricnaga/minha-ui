import { useToggle } from '../useToggle';
export function useDisclosure(isTruthy = false) {
    const { handleClose, handleOpen, handleToggle, isToggle, setAsToggle } = useToggle(isTruthy);
    return {
        isOpen: isToggle,
        handleClose,
        handleOpen,
        handleToggle,
        setAsOpen: setAsToggle,
    };
}
