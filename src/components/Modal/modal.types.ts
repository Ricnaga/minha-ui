import type { ModalVariants } from "../../theme";
import type { useModalProvider } from "./useModal";
import type { RequiredChildren } from "../../types";

export type UseModalProviderProps = ModalVariants &
  RequiredChildren<{ isOpen: boolean; onClose: VoidFunction }>;

export type ModalProps = UseModalProviderProps;

export type ModalContextProps = Omit<
  ReturnType<typeof useModalProvider>,
  "children"
>;
