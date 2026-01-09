import type { ProgressVariants } from "@/theme";
import type { HTMLAttributes } from "react";

export interface UseProgressProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
    ProgressVariants {
  value?: number;
}

export type ProgressProps = UseProgressProps;
