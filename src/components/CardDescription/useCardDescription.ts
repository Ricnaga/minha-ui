import { cardDescription } from "../../theme";
import type {
  CardDescriptionProps,
  UseCardDescriptionProps,
} from "./card-description.types";

export function useCardDescription(props: UseCardDescriptionProps) {
  const cardDescriptionProps: CardDescriptionProps = {
    ...props,
    className: cardDescription(),
  };

  return { cardDescriptionProps };
}
