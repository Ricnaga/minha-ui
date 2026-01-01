import type { FocustrapProps } from "./focustrap.types";
import { useFocustrap } from "./useFocustrap";

export function Focustrap(props: FocustrapProps) {
  const { focustrapProps, containerRef } = useFocustrap(props);

  return <div {...focustrapProps} ref={containerRef} />;
}
