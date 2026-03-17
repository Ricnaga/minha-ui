import type { TopLoadingBarVariants } from "@/theme";

export interface TopLoadingBarProps extends TopLoadingBarVariants {
  progress: number;
  className?: string;
}

export type UseTopLoadingBarProps = TopLoadingBarProps;
