import { divider } from "../../theme";
import type { DividerProps, UseDividerProps } from "./divider.types";

export function useDivider(props: UseDividerProps) {
  const {
    className,
    orientation = "horizontal",
    inset = "none",
    ...rest
  } = props;

  const dividerProps: DividerProps = {
    ...rest,
    className: divider({ orientation, inset, className }),
  };

  return { dividerProps };
}
