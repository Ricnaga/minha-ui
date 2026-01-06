import type { CardSubtitleVariants } from "@/theme";
import type { HTMLAttributes } from "react";

export type UseCardSubtitleProps = CardSubtitleVariants &
  HTMLAttributes<HTMLParagraphElement>;
export type CardSubtitleProps = UseCardSubtitleProps;
