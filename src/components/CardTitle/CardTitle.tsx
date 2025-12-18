import type { CardTitleProps } from "./card-title.types";
import { useCardTitle } from "./useCardTitle";

export function CardTitle(props: CardTitleProps) {
  const { cardTitleProps, Component } = useCardTitle(props);
  return <Component {...cardTitleProps} />;
}
