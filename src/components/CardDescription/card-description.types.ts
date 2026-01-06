import type { CardDescriptionVariants } from "@/theme";
import type { HTMLAttributes } from "react";

export type UseCardDescriptionProps = CardDescriptionVariants &
  HTMLAttributes<HTMLParagraphElement>;
export type CardDescriptionProps = UseCardDescriptionProps;
