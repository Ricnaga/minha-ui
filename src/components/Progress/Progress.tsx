import type { ProgressProps } from "./progress.types";
import { useProgress } from "./useProgress";

export function Progress(props: ProgressProps) {
  const { coreProps, wrapperProps } = useProgress(props);

  return (
    <div {...wrapperProps}>
      <div {...coreProps} />
    </div>
  );
}
