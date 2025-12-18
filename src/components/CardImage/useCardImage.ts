import { cardImage } from "../../theme";
import type { CardImageProps, UseCardImageProps } from "./card-image.types";

export function useCardImage(props: UseCardImageProps) {
  const { className: classNameWrapper, ...rest } = props;

  const cardImageProps: CardImageProps = {
    ...rest,
  };

  const className = cardImage({ className: classNameWrapper });

  return { cardImageProps, className };
}
