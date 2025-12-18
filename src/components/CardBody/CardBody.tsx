import type { CardBodyProps } from "./card-body.types";
import { useCardBody } from "./useCardBody";

export function CardBody(props: CardBodyProps) {
  const { cardBodyProps } = useCardBody(props);

  return <div {...cardBodyProps} />;
}
