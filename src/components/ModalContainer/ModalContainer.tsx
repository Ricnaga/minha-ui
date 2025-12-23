import type { ModalContainerProps } from "./modal-container.types";
import { useModalContainer } from "./useModalContainer";

export function ModalContainer(props: ModalContainerProps) {
  const { modalContainerProps } = useModalContainer(props);

  return <div {...modalContainerProps} />;
}
