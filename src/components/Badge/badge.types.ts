import type { HTMLAttributes } from "react";
import type { BadgeVariants } from "../../theme";

export interface UseBadgeProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
    BadgeVariants {
  value?: string | number;
}

export type BadgeProps = UseBadgeProps;
