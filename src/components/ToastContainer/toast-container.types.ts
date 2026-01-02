import type { ToastVariants } from "@/theme";
import type { ToastProps } from "./_components/Toast";
import type { useToastContainerProvider } from "./useToastContainer";

export type UseToastContainerProviderProps = ToastProps;

export interface ShowToastArgs extends ToastVariants {
  message: string;
}

export interface ToastState extends ShowToastArgs, ToastVariants {
  id: string;
  state: "open" | "closed";
}

export type ToastContainerProps = UseToastContainerProviderProps;

export type ToastContainerContextProps = Pick<
  ReturnType<typeof useToastContainerProvider>,
  "showToast"
>;
