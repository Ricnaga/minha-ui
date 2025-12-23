import { Backdrop } from "../Backdrop";
import { ModalContainer } from "../ModalContainer";
import type { ModalProps } from "./modal.types";
import { ModalContext, useModalProvider } from "./useModal";

export function Modal(props: ModalProps) {
  const { modalContainerProps, ...rest } = useModalProvider(props);

  return (
    <Backdrop isOpen={rest.isOpen} onClose={rest.onClose}>
      <ModalContext.Provider value={rest}>
        <ModalContainer {...modalContainerProps} />
      </ModalContext.Provider>
    </Backdrop>
  );
}
