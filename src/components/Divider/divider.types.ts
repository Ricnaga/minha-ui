import type { HTMLAttributes } from "react";
import type { DividerVariants } from "@/theme";

export interface UseDividerProps
  extends HTMLAttributes<HTMLDivElement>,
    DividerVariants {}

export type DividerProps = UseDividerProps;
