import { cardHeader } from "../../theme";
import type { CardHeaderProps, UseCardHeaderProps } from "./card-header.types";

export function useCardHeader(props: UseCardHeaderProps) {
  const cardHeaderProps: CardHeaderProps = {
    ...props,
    className: cardHeader(),
  };

  return { cardHeaderProps };
}
