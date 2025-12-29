import type { HTMLAttributes } from "react";
import { modalHeader } from "@/theme";
import { useModal } from "../Modal";
import type {
  ModalHeaderProps,
  UseModalHeaderProps,
} from "./modal-header.types";

const { closeButton, wrapper } = modalHeader();

export function useModalHeader(props: UseModalHeaderProps) {
  const { children, ...rest } = props;
  const { onClose } = useModal();

  const modalHeaderProps: ModalHeaderProps = {
    ...rest,
    className: wrapper(),
  };

  const closeButtonProps: HTMLAttributes<HTMLButtonElement> = {
    className: closeButton(),
    onClick: onClose,
  };

  return { children, modalHeaderProps, closeButtonProps };
}
