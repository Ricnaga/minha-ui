import type { HTMLAttributes } from "react";
import type { DrawerContainerVariants } from "@/theme";

export type UseDrawerContainerProps = HTMLAttributes<HTMLElement> &
  DrawerContainerVariants;
export type DrawerContainerProps = UseDrawerContainerProps;
