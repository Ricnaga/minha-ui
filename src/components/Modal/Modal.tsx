import { Backdrop } from "../Backdrop";
import type { ModalProps } from "./modal.types";
import { ModalContext, useModalProvider } from "./useModal";

export function Modal(props: ModalProps) {
  const { children, ...rest } = useModalProvider(props);

  return (
    <Backdrop isOpen={rest.isOpen} onClose={rest.onClose}>
      <ModalContext.Provider value={rest}>{children}</ModalContext.Provider>
    </Backdrop>
  );
}
