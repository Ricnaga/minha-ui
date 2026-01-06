import { cardFooter } from "@/theme";
import type { CardFooterProps, UseCardFooterProps } from "./card-footer.types";

export function useCardFooter(props: UseCardFooterProps) {
  const { align = "end", wrap = false, divider = false, ...rest } = props;
  
  const cardFooterProps: CardFooterProps = {
    ...rest,
    className: cardFooter({ align, divider, wrap }),
  };

  return { cardFooterProps };
}
