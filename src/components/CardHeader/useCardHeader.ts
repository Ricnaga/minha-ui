import { cardHeader } from "@/theme";
import type { CardHeaderProps, UseCardHeaderProps } from "./card-header.types";

export function useCardHeader(props: UseCardHeaderProps) {
  const {
    align = "left",
    divider = false,
    background = "none",
    ...rest
  } = props;

  const cardHeaderProps: CardHeaderProps = {
    ...rest,
    className: cardHeader({ align, background, divider }),
  };

  return { cardHeaderProps };
}
