import type { ToastVariants } from "@/theme";
import type { HTMLAttributes } from "react";

export interface UseToastProps
  extends HTMLAttributes<HTMLDivElement>,
    ToastVariants {
  state?: "open" | "closed";
  "data-state"?: "open" | "closed";
}

export type ToastProps = UseToastProps;
