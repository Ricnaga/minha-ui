import { cardBody } from "../../theme";
import type { CardBodyProps, UseCardBodyProps } from "./card-body.types";

export function useCardBody(props: UseCardBodyProps) {
  const cardBodyProps: CardBodyProps = {
    ...props,
    className: cardBody(),
  };

  return { cardBodyProps };
}
