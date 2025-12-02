import type { ProgressProps } from "./progress.types";
import { useProgress } from "./useProgress";

export function Progress(props: ProgressProps) {
  const { progressProps } = useProgress(props);

  return <div {...progressProps} />;
}
