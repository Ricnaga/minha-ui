import type { ReactNode } from "react";
import { toast, type ToastVariants } from "../../theme";

interface ToastProps extends ToastVariants {
  children: ReactNode;
}

export function Toast({ children, position, variant }: ToastProps) {
  return <div className={toast({ variant, position })}>{children}</div>;
}
