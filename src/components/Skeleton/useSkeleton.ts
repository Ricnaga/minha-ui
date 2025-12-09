import { skeleton } from "../../theme";
import type { SkeletonProps, UseSkeletonProps } from "./skeleton.types";

export function useSkeleton(props: UseSkeletonProps) {
  const { className, variant = "rounded", size = "md", ...rest } = props;

  const skeletonProps: SkeletonProps = {
    ...rest,
    className: skeleton({ variant, size, className }),
  };

  return { skeletonProps };
}
