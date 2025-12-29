import type { HTMLAttributes } from "react";
import type { DividerVariantsProps } from "@/theme";

export interface UseDividerProps
  extends HTMLAttributes<HTMLDivElement>,
    DividerVariantsProps {}

export type DividerProps = UseDividerProps;
