import type { ModalContainerVariants } from "@/theme";
import type { RequiredChildren } from "@/types";
import type { useModalProvider } from "./useModal";

export interface UseModalProviderProps
  extends ModalContainerVariants,
    RequiredChildren {
  isOpen: boolean;
  onClose: VoidFunction;
  titleId?: string;
}

export type ModalProps = UseModalProviderProps;

export type ModalContextProps = Omit<
  ReturnType<typeof useModalProvider>,
  "children" | "modalContainerProps"
>;
