import { createContext, useCallback, useState } from "react";
import { useContext } from "../../hooks";
import type { ToastVariants } from "../../theme";
import { ToastContainer } from "./ToastContainer";

interface ShowToastArgs extends ToastVariants {
  message: string;
}

interface ToastState extends ShowToastArgs {
  id: string;
}

export function useToastProvider() {
  const [toasts, setToasts] = useState<ToastState[]>([]);

  const show = useCallback((args: ShowToastArgs, seconds: number = 3000) => {
    const { message, position = "top-right", variant = "primary" } = args;

    const id = crypto.randomUUID();

    setToasts((prev) => [...prev, { id, message, variant, position }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, seconds);
  }, []);

  return {
    show,
    toasts,
  };
}

type ToastContextType = Pick<ReturnType<typeof useToastProvider>, "show">;

export const ToastContext = createContext<ToastContextType>(
  {} as ToastContextType
);

export function useToast() {
  return useContext({
    context: ToastContext,
    hookName: useToast.name,
    providerName: ToastContainer.name,
  });
}
