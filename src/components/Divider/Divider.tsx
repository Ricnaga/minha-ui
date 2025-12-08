import type { DividerProps } from "./divider.types";
import { useDivider } from "./useDivider";

export function Divider(props: DividerProps) {
  const { dividerProps } = useDivider(props);

  return <div {...dividerProps} />;
}
