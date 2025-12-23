import type {
  ModalContainerProps,
  UseModalContainerProps,
} from "./modal-container.types";
import { modalContainer } from "../../theme";

export function useModalContainer(props: UseModalContainerProps) {
  const { radius = "md", shadow = "md", ...rest } = props;

  const modalContainerProps: ModalContainerProps = {
    ...rest,
    className: modalContainer({ radius, shadow }),
  };

  return { modalContainerProps };
}
