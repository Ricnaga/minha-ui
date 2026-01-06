import type { CardBodyVariants } from "@/theme";
import type { HTMLAttributes } from "react";

export type UseCardBodyProps = CardBodyVariants &
  HTMLAttributes<HTMLDivElement>;
export type CardBodyProps = UseCardBodyProps;
