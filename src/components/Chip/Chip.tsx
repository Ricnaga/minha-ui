import type { ChipProps } from "./chip.types";
import { useChip } from "./useChip";

export function Chip(props: ChipProps) {
  const { chipProps } = useChip(props);

  return <span {...chipProps} />;
}
