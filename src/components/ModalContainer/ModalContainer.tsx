import type { ModalContainerProps } from "./modal-container.types";
import { useModalContainer } from "./useModalContainer";

export function ModalContainer(props: ModalContainerProps) {
  const { modalContainerProps, modalContainerRef } = useModalContainer(props);

  return <div {...modalContainerProps} ref={modalContainerRef} />;
}
