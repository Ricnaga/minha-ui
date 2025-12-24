import type { HTMLAttributes } from "react";
import type { DrawerBodyVariants } from "../../theme";

export type UseDrawerBodyProps = DrawerBodyVariants &
  HTMLAttributes<HTMLElement>;
export type DrawerBodyProps = UseDrawerBodyProps;
