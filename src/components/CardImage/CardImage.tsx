import type { CardImageProps } from "./card-image.types";
import { useCardImage } from "./useCardImage";

export function CardImage(props: CardImageProps) {
  const { cardImageProps, className } = useCardImage(props);
  return (
    <div className={className}>
      <img {...cardImageProps} />;
    </div>
  );
}
