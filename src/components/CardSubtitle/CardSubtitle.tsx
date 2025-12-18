import type { CardSubtitleProps } from "./card-subtitle.types";
import { useCardSubtitle } from "./useCardSubtitle";

export function CardSubtitle(props: CardSubtitleProps) {
  const { cardSubtitleProps } = useCardSubtitle(props);
  return <p {...cardSubtitleProps} />;
}
