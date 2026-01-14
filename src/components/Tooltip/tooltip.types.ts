import type { HTMLAttributes, ReactNode } from "react";
import type { TooltipVariants } from "@/theme";

export interface UseTooltipProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "color" | "content">,
    TooltipVariants {
  content: ReactNode;
}

export type TooltipProps = UseTooltipProps;
