import { modalContainer } from "@/theme";
import { useModal } from "../Modal/useModal";
import type {
  ModalContainerProps,
  UseModalContainerProps,
} from "./modal-container.types";

export function useModalContainer(props: UseModalContainerProps) {
  const { radius = "md", shadow = "md", ...rest } = props;
  
  const { isOpen } = useModal();

  const modalContainerProps: ModalContainerProps = {
    ...rest,
    className: modalContainer({ radius, shadow, isOpen }),
  };

  return { modalContainerProps };
}
