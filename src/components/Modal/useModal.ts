import { createContext, useId } from "react";
import { useContext } from "../../hooks";
import type { ModalContextProps, UseModalProviderProps } from "./modal.types";

export const ModalContext = createContext<ModalContextProps>(
  {} as ModalContextProps
);

export function useModalProvider(props: UseModalProviderProps) {
  const reactId = useId();
  const { children, titleId = reactId, ...rest } = props;

  return { children, titleId, ...rest };
}

export function useModal() {
  return useContext({
    context: ModalContext,
    hookName: useModal.name,
    providerName: ModalContext.name,
  });
}
