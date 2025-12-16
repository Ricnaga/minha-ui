import { toast } from "../../theme";
import type { ToastProps } from "./toast.types";

export function Toast({ children, position, variant }: ToastProps) {
  return <div className={toast({ variant, position })}>{children}</div>;
}
