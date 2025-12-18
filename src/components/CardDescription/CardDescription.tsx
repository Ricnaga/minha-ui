import type { CardDescriptionProps } from "./card-description.types";
import { useCardDescription } from "./useCardDescription";

export function CardDescription(props: CardDescriptionProps) {
  const { cardDescriptionProps } = useCardDescription(props);
  return <p {...cardDescriptionProps} />;
}
