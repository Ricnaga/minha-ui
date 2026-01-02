import type { ToastProps } from "./toast.types";
import { useToast } from "./useToast";

export function Toast(props: ToastProps) {
  const { toastProps } = useToast(props);

  return <div {...toastProps} />;
}
