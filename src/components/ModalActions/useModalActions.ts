import type {
  ModalActionsProps,
  UseModalActionsProps,
} from "./modal-actions.types";
import { modalActions } from "@/theme";
import { useModal } from "../Modal/useModal";

export function useModalActions(props: UseModalActionsProps) {
  const { columns = 2, align = "right", ...rest } = props;
  const { onClose } = useModal();

  const modalActionsProps: ModalActionsProps = {
    ...rest,
    "data-testid": "modal-actions",
    className: modalActions({ align, columns }),
  };

  return { modalActionsProps, onClose };
}
