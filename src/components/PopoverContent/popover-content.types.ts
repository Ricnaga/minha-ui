import type { HTMLAttributes } from "react";
import type { PopoverContentVariants } from "@/theme";

export type UsePopoverContentProps = PopoverContentVariants &
  HTMLAttributes<HTMLDivElement>;

export type PopoverContentProps = UsePopoverContentProps;
