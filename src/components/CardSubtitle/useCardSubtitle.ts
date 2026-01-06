import { cardSubtitle } from "@/theme";
import type {
  CardSubtitleProps,
  UseCardSubtitleProps,
} from "./card-subtitle.types";

export function useCardSubtitle(props: UseCardSubtitleProps) {
  const {
    size = "md",
    weight = "normal",
    color = "default",
    align = "left",
    ...rest
  } = props;
  
  const cardSubtitleProps: CardSubtitleProps = {
    ...rest,
    className: cardSubtitle({ align, color, size, weight }),
  };

  return { cardSubtitleProps };
}
