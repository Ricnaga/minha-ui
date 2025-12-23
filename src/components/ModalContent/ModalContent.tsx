import type { ModalContentProps } from "./modal-content.types";
import { useModalContent } from "./useModalContent";

export function ModalContent(props: ModalContentProps) {
  const { modalContentProps } = useModalContent(props);

  return <div {...modalContentProps} />;
}
