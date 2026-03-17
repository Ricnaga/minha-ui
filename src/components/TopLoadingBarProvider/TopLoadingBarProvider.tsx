import type {
  TopLoadingBarProviderProps
} from "./top-loading-bar-provider.types";
import {
  TopLoadingBarContext,
  useTopLoadingBarProvider,
} from "./useTopLoadingBarProvider";
import { TopLoadingBar } from "../TopLoadingBar";

export function TopLoadingBarProvider(props: TopLoadingBarProviderProps) {
  const contextValue = useTopLoadingBarProvider(props);
  const { children, color, progress, isAnimating } = contextValue;

  return (
    <TopLoadingBarContext.Provider value={contextValue}>
      {children}
      {isAnimating && <TopLoadingBar progress={progress} color={color} />}
    </TopLoadingBarContext.Provider>
  );
}
