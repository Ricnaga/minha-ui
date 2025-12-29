import type { HTMLAttributes } from "react";
import type { DrawerFooterVariants } from "@/theme";

export type UseDrawerFooterProps = DrawerFooterVariants &
  HTMLAttributes<HTMLElement>;
export type DrawerFooterProps = UseDrawerFooterProps;
