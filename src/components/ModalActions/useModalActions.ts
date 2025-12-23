import type {
  ModalActionsProps,
  UseModalActionsProps,
} from "./modal-actions.types";
import { modalActions } from "../../theme";
import { useModal } from "../Modal/useModal";

export function useModalActions(props: UseModalActionsProps) {
  const { onClose } = useModal();

  // TODO: Implement hook logic
  const modalActionsProps: ModalActionsProps = {
    ...props,
    className: modalActions(),
  };

  return { modalActionsProps, onClose };
}
