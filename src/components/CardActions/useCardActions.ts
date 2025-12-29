import { cardActions } from "@/theme";
import type {
  CardActionsProps,
  UseCardActionsProps,
} from "./card-actions.types";

export function useCardActions(props: UseCardActionsProps) {
  const cardActionsProps: CardActionsProps = {
    ...props,
    className: cardActions(),
  };

  return { cardActionsProps };
}
