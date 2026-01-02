import { toast } from "@/theme";
import type { ToastProps, UseToastProps } from "./toast.types";

export function useToast(props: UseToastProps) {
  const { position, variant, state, ...rest } = props;

  const toastProps: ToastProps = {
    ...rest,
    state,
    "data-state": state,
    className: toast({ position, variant }),
  };

  return { toastProps };
}
