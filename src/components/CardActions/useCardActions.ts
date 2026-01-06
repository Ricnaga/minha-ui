import { cardActions } from "@/theme";
import type {
  CardActionsProps,
  UseCardActionsProps,
} from "./card-actions.types";

export function useCardActions(props: UseCardActionsProps) {
  const {
    align = "end",
    direction = "row",
    wrap = false,
    divider = false,
    ...rest
  } = props;
  
  const cardActionsProps: CardActionsProps = {
    ...rest,
    className: cardActions({ align, direction, divider, wrap }),
  };

  return { cardActionsProps };
}
