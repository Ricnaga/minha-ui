import type { HTMLAttributes } from "react";
import type { DrawerHeaderVariants } from "@/theme";

export type UseDrawerHeaderProps = DrawerHeaderVariants &
  HTMLAttributes<HTMLElement>;
export type DrawerHeaderProps = UseDrawerHeaderProps;
