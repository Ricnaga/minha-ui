import type { CardActionsVariants } from "@/theme";
import type { HTMLAttributes } from "react";

export type UseCardActionsProps = CardActionsVariants &
  HTMLAttributes<HTMLElement>;

export type CardActionsProps = UseCardActionsProps;
