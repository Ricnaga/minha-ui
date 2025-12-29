import { card } from "@/theme";
import type { CardProps, UseCardProps } from "./card.types";

export function useCard(props: UseCardProps) {
  const cardProps: CardProps = {
    ...props,
    className: card(),
  };

  return { cardProps };
}
