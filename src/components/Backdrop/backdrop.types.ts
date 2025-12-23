import type { HTMLAttributes } from "react";
import type { BackdropVariants } from "../../theme";

export interface UseBackdropProps
  extends BackdropVariants,
    HTMLAttributes<HTMLDivElement> {
  zIndex?: number;
  isLoading?: boolean;
  onClose?: VoidFunction;
}
export type BackdropProps = UseBackdropProps;
