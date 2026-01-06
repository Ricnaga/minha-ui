import { cardBody } from "@/theme";
import type { CardBodyProps, UseCardBodyProps } from "./card-body.types";

export function useCardBody(props: UseCardBodyProps) {
  const { padding = "md", gap = "md", background = "none", ...rest } = props;

  const cardBodyProps: CardBodyProps = {
    ...rest,
    className: cardBody({ background, gap, padding }),
  };

  return { cardBodyProps };
}
