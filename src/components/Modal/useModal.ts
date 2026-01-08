import { createContext, useId } from "react";
import { useContext } from "@/hooks";
import type { ModalContextProps, UseModalProviderProps } from "./modal.types";
import type { ModalContainerProps } from "../ModalContainer";

export const ModalContext = createContext<ModalContextProps>(
  {} as ModalContextProps
);

export function useModalProvider(props: UseModalProviderProps) {
  const reactId = useId();
  const {
    children,
    titleId = reactId,
    padding = "md",
    radius = "md",
    shadow = "md",
    ...rest
  } = props;

  const modalContainerProps: ModalContainerProps = {
    radius,
    shadow,
    children,
    padding,
  };

  return { titleId, modalContainerProps, ...rest };
}

export function useModal() {
  return useContext({
    context: ModalContext,
    hookName: useModal.name,
    providerName: ModalContext.name,
  });
}
