import { useClickOutside } from "@/hooks";
import { modalContainer } from "@/theme";
import { useModal } from "../Modal/useModal";
import type {
  ModalContainerProps,
  UseModalContainerProps,
} from "./modal-container.types";

export function useModalContainer(props: UseModalContainerProps) {
  const { radius = "md", shadow = "md", padding = "md", ...rest } = props;
  const { onClose, isOpen } = useModal();

  const modalContainerRef = useClickOutside({
    onOutsideClick: onClose,
    enabled: true,
  });

  const modalContainerProps: ModalContainerProps = {
    ...rest,
    "data-testid": "modal-container",
    className: modalContainer({ radius, shadow, isOpen, padding }),
  };

  return { modalContainerProps, modalContainerRef };
}
