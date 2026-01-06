import type { CardImageVariants } from "@/theme";
import type { ImgHTMLAttributes } from "react";

export type UseCardImageProps = CardImageVariants &
  ImgHTMLAttributes<HTMLImageElement>;
export type CardImageProps = UseCardImageProps;
