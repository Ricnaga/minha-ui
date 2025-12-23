import type {
  ModalFooterProps,
  UseModalFooterProps,
} from "./modal-footer.types";
import { modalFooter } from "../../theme";

export function useModalFooter(props: UseModalFooterProps) {
  const modalFooterProps: ModalFooterProps = {
    ...props,
    className: modalFooter(),
  };

  return { modalFooterProps };
}
