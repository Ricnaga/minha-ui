import type { ModalFooterProps } from "./modal-footer.types";
import { useModalFooter } from "./useModalFooter";

export function ModalFooter(props: ModalFooterProps) {
  const { modalFooterProps } = useModalFooter(props);

  return <footer {...modalFooterProps} />;
}
