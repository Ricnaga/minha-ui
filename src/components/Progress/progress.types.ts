import type { ProgressVariants } from "@/theme";
import type { DataTestidProps } from "@/types";
import type { HTMLAttributes } from "react";

export interface UseProgressProps
  extends DataTestidProps,
    Omit<HTMLAttributes<HTMLDivElement>, "color">,
    ProgressVariants {
  value?: number;
}

export type ProgressProps = UseProgressProps;
