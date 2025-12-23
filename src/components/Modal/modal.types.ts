import type { useModalProvider } from "./useModal";
import type { RequiredChildren } from "../../types";

export type UseModalProviderProps = RequiredChildren<{
  isOpen: boolean;
  onClose: VoidFunction;
  titleId?: string;
}>;

export type ModalProps = UseModalProviderProps;

export type ModalContextProps = Omit<
  ReturnType<typeof useModalProvider>,
  "children"
>;
