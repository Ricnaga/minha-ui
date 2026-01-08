import type {
  ModalActionsProps,
  UseModalActionsProps,
} from "./modal-actions.types";
import { modalActions } from "@/theme";
import { useModal } from "../Modal/useModal";

export function useModalActions(props: UseModalActionsProps) {
  const { onClose } = useModal();

  const modalActionsProps: ModalActionsProps = {
    ...props,
    "data-testid": "modal-actions",
    className: modalActions(),
  };

  return { modalActionsProps, onClose };
}
