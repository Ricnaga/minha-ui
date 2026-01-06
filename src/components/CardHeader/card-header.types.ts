import type { CardHeaderVariants } from "@/theme";
import type { HTMLAttributes } from "react";

export type UseCardHeaderProps = CardHeaderVariants &
  HTMLAttributes<HTMLElement>;
export type CardHeaderProps = UseCardHeaderProps;
