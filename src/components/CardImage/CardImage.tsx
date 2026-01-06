import type { CardImageProps } from "./card-image.types";
import { useCardImage } from "./useCardImage";

export function CardImage(props: CardImageProps) {
  const { cardImageProps } = useCardImage(props);
  return <img {...cardImageProps} />;
}
