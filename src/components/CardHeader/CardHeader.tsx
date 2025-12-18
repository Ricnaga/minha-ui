import type { CardHeaderProps } from "./card-header.types";
import { useCardHeader } from "./useCardHeader";

export function CardHeader(props: CardHeaderProps) {
  const { cardHeaderProps } = useCardHeader(props);
  return <header {...cardHeaderProps} />;
}
