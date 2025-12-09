import type { HTMLAttributes } from "react";
import type { ChipVariants } from "../../theme";

export interface UseChipProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "color">,
    ChipVariants {}

export type ChipProps = UseChipProps;
