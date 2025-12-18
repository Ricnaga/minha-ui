import type { CardActionsProps } from "./card-actions.types";
import { useCardActions } from "./useCardActions";

export function CardActions(props: CardActionsProps) {
  const { cardActionsProps } = useCardActions(props);

  return <footer {...cardActionsProps} />;
}
