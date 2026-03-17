import { topLoadingBar } from "@/theme";
import type { UseTopLoadingBarProps } from "./top-loading-bar.types";

export function useTopLoadingBar(props: UseTopLoadingBarProps) {
  const { color = "primary", progress = 0, className } = props;

  const progressWidth = `${Math.min(progress, 100)}%`;

  const containerClasses = topLoadingBar({ color, className });

  return {
    progress,
    color,
    className,
    progressWidth,
    containerClasses,
  };
}
