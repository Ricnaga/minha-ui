import type { HTMLAttributes } from "react";
import type { CardVariants } from "../../theme";

export type UseCardProps = CardVariants & HTMLAttributes<HTMLElement>;

export type CardProps = UseCardProps;
