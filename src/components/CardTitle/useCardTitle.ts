import { cardTitle } from "@/theme";
import type {
  CardTitleProps,
  HeadingTags,
  UseCardTitleProps,
} from "./card-title.types";

export function useCardTitle(props: UseCardTitleProps) {
  const {
    as = "h2",
    size = "md",
    weight = "bold",
    color = "default",
    align = "left",
    ...rest
  } = props;

  const Component: HeadingTags = as;

  const cardTitleProps: CardTitleProps = {
    ...rest,
    className: cardTitle({ align, color, size, weight }),
  };

  return { cardTitleProps, Component };
}
