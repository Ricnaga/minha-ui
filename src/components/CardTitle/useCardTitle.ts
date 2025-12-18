import { cardTitle } from "../../theme";
import type {
  CardTitleProps,
  HeadingTags,
  UseCardTitleProps,
} from "./card-title.types";

export function useCardTitle(props: UseCardTitleProps) {
  const Component: HeadingTags = props.as ?? "h2";

  const cardTitleProps: CardTitleProps = {
    ...props,
    className: cardTitle(),
  };

  return { cardTitleProps, Component };
}
