import type { useModalProvider } from "./useModal";
import type { RequiredChildren } from "@/types";
import type { ModalContainerVariants } from "@/theme";

export type UseModalProviderProps = ModalContainerVariants &
  RequiredChildren<{
    isOpen: boolean;
    onClose: VoidFunction;
    titleId?: string;
  }>;

export type ModalProps = UseModalProviderProps;

export type ModalContextProps = Omit<
  ReturnType<typeof useModalProvider>,
  "children" | "modalContainerProps"
>;
