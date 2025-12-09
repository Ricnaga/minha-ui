import { chip } from "../../theme";
import { type ChipProps, type UseChipProps } from "./chip.types";

export function useChip(props: UseChipProps) {
  const {
    color = "primary",
    size = "medium",
    rounded = "full",
    className,
    ...rest
  } = props;

  const chipProps: ChipProps = {
    ...rest,
    className: chip({ color, rounded, size, className }),
  };

  return { chipProps };
}
