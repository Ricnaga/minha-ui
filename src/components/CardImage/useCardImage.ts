import { cardImage } from "@/theme";
import type { CardImageProps, UseCardImageProps } from "./card-image.types";

export function useCardImage(props: UseCardImageProps) {
  const {
    className: classNameWrapper,
    rounded = "none",
    aspect = "auto",
    ...rest
  } = props;

  const cardImageProps: CardImageProps = {
    ...rest,
    className: cardImage({ className: classNameWrapper, aspect, rounded }),
  };

  return { cardImageProps };
}
