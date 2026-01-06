import type { CardTitleVariants } from "@/theme";
import type { HTMLAttributes, JSX } from "react";

export type HeadingTags = Extract<
  keyof JSX.IntrinsicElements,
  "h2" | "h3" | "h4"
>;

export interface UseCardTitleProps
  extends CardTitleVariants,
    Omit<HTMLAttributes<HTMLHeadingElement>, "color"> {
  as?: HeadingTags;
}

export type CardTitleProps = UseCardTitleProps;
