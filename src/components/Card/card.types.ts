import type { HTMLAttributes } from "react";
import type { CardVariants } from "../../theme";

export type UseCardProps = CardVariants & HTMLAttributes<HTMLDivElement>;

export type CardProps = UseCardProps;
