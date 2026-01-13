import { skeleton } from "@/theme";
import type { SkeletonProps, UseSkeletonProps } from "./skeleton.types";

export function useSkeleton(props: UseSkeletonProps) {
  const { className, shape = "rounded", ...rest } = props;

  const skeletonProps: SkeletonProps = {
    ...rest,
    role: "status",
    "aria-busy": "true",
    className: skeleton({ shape, className }),
  };

  return { skeletonProps };
}
