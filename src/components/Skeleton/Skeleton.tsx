import type { SkeletonProps } from "./skeleton.types";
import { useSkeleton } from "./useSkeleton";

export function Skeleton(props: SkeletonProps) {
  const { skeletonProps } = useSkeleton(props);

  return <div {...skeletonProps} />;
}
