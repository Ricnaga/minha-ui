import type { HTMLAttributes, ReactNode } from "react";
import type { TooltipVariants } from "../../theme";

export interface UseTooltipProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
    TooltipVariants {
  description: ReactNode;
}

export type TooltipProps = Omit<UseTooltipProps, "description">;
