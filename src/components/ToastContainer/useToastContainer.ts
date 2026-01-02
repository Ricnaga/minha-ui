import { createContext, useCallback, useState } from "react";
import { useContext } from "@/hooks";
import type {
  ShowToastArgs,
  ToastContainerContextProps,
  ToastState,
  UseToastContainerProviderProps,
} from "./toast-container.types";

export const ToastContainerContext = createContext<ToastContainerContextProps>(
  {} as ToastContainerContextProps
);

const ANIMATION_DURATION = 300; // ms (tem que bater com o Tailwind)

export function useToastContainerProvider(
  props: UseToastContainerProviderProps
) {
  const positions = {
    "top-right": "top-4 right-4 items-end",
    "top-left": "top-4 left-4 items-start",
    "bottom-right": "bottom-4 right-4 items-end",
    "bottom-left": "bottom-4 left-4 items-start",
  };

  const [toasts, setToasts] = useState<ToastState[]>([]);

  const showToast = useCallback(
    (args: ShowToastArgs, seconds: number = 3000) => {
      const { message, position = "top-right", variant = "primary" } = args;

      const id = crypto.randomUUID();

      setToasts((prev) => [
        ...prev,
        { id, message, variant, position, state: "open" },
      ]);

      setTimeout(() => {
        // dispara animação de saída
        setToasts((prev) =>
          prev.map((t) => (t.id === id ? { ...t, state: "closed" } : t))
        );

        // remove depois da animação
        setTimeout(() => {
          setToasts((prev) => prev.filter((t) => t.id !== id));
        }, ANIMATION_DURATION);
      }, seconds);
    },
    []
  );

  return { ...props, positions, toasts, showToast };
}

export function useToast() {
  return useContext({
    context: ToastContainerContext,
    hookName: useToast.name,
    providerName: ToastContainerContext.name,
  });
}
