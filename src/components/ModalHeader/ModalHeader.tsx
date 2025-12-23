import { XIcon } from "@phosphor-icons/react";
import type { ModalHeaderProps } from "./modal-header.types";
import { useModalHeader } from "./useModalHeader";

export function ModalHeader(props: ModalHeaderProps) {
  const { children, modalHeaderProps, closeButtonProps } =
    useModalHeader(props);

  return (
    <header {...modalHeaderProps}>
      {children}
      <button {...closeButtonProps}>
        <XIcon />
      </button>
    </header>
  );
}
