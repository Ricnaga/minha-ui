import type { HTMLAttributes } from "react";
import { modalHeader } from "@/theme";
import { useModal } from "../Modal";
import type {
  ModalHeaderProps,
  UseModalHeaderProps,
} from "./modal-header.types";

const { closeButton, wrapper } = modalHeader();

export function useModalHeader(props: UseModalHeaderProps) {
  const { children, padding = "lg", align = "left", ...rest } = props;
  const { onClose } = useModal();

  const modalHeaderProps: ModalHeaderProps = {
    ...rest,
    role: "banner",
    className: wrapper({ align, padding }),
  };

  const closeButtonProps: HTMLAttributes<HTMLButtonElement> = {
    "aria-label": "close-modal",
    className: closeButton(),
    onClick: onClose,
  };

  return { children, modalHeaderProps, closeButtonProps };
}
