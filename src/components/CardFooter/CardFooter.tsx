import type { CardFooterProps } from "./card-footer.types";
import { useCardFooter } from "./useCardFooter";

export function CardFooter(props: CardFooterProps) {
  const { cardFooterProps } = useCardFooter(props);
  
  return <div {...cardFooterProps} />;
}
