import { card } from "@/theme";
import type { CardProps, UseCardProps } from "./card.types";

export function useCard(props: UseCardProps) {
  const { radius = "md", shadow = "md", ...rest } = props;
  
  const cardProps: CardProps = {
    ...rest,
    className: card({ radius, shadow }),
  };

  return { cardProps };
}
