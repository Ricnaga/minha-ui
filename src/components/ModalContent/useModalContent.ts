import type {
  ModalContentProps,
  UseModalContentProps,
} from "./modal-content.types";
import { modalContent } from "../../theme";
import { useModal } from "../Modal/useModal";

export function useModalContent(props: UseModalContentProps) {
  const { titleId } = useModal();

  const modalContentProps: ModalContentProps = {
    ...props,
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": titleId,
    className: modalContent(),
  };

  return { modalContentProps };
}
