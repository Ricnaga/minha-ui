import type { ReactNode } from "react";
import type { DndVariants } from "@/theme";

export interface UseDndProps extends DndVariants {
  children?: ReactNode;
}

export type DndProps = UseDndProps;
