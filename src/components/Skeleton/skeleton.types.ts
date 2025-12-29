import type { HTMLAttributes } from "react";
import type { SkeletonVariants } from "@/theme";

export interface UseSkeletonProps
  extends HTMLAttributes<HTMLDivElement>,
    SkeletonVariants {}

export type SkeletonProps = UseSkeletonProps;
