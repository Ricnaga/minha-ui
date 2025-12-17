import type { CardProps } from "./card.types";
import { useCard } from "./useCard";

export function Card(props: CardProps) {
  const { cardProps } = useCard(props);
  
  return <div {...cardProps} />;
}
