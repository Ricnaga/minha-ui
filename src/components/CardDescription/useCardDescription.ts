import { cardDescription } from "@/theme";
import type {
  CardDescriptionProps,
  UseCardDescriptionProps,
} from "./card-description.types";

export function useCardDescription(props: UseCardDescriptionProps) {
  const {
    size = "md",
    weight = "normal",
    color = "default",
    align = "left",
    ...rest
  } = props;
  
  const cardDescriptionProps: CardDescriptionProps = {
    ...rest,
    className: cardDescription({ align, color, size, weight }),
  };

  return { cardDescriptionProps };
}
