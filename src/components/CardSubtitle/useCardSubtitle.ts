import { cardSubtitle } from "@/theme";
import type {
  CardSubtitleProps,
  UseCardSubtitleProps,
} from "./card-subtitle.types";

export function useCardSubtitle(props: UseCardSubtitleProps) {
  const cardSubtitleProps: CardSubtitleProps = {
    ...props,
    className: cardSubtitle(),
  };

  return { cardSubtitleProps };
}
