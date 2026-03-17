import type { TopLoadingBarProps } from "./top-loading-bar.types";
import { useTopLoadingBar } from "./useTopLoadingBar";

export function TopLoadingBar(props: TopLoadingBarProps) {
  const { progressWidth, containerClasses, className } = useTopLoadingBar(props);

  if (progressWidth === "0%") {
    return null;
  }

  return (
    <div 
      data-testid="top-loading-bar" 
      className={`${containerClasses} ${className || ""}`} 
      style={{ width: progressWidth }} 
    />
  );
}
