import { cardFooter } from "@/theme";
import type { CardFooterProps, UseCardFooterProps } from "./card-footer.types";

export function useCardFooter(props: UseCardFooterProps) {
  const cardFooterProps: CardFooterProps = {
    ...props,
    className: cardFooter(),
  };

  return { cardFooterProps };
}
