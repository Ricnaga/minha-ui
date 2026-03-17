import { useContext } from "@/hooks";
import { createContext, useState, useCallback, useRef } from "react";
import type {
  TopLoadingBarContextProps,
  UseTopLoadingBarProviderProps,
} from "./top-loading-bar-provider.types";

export const TopLoadingBarContext = createContext<TopLoadingBarContextProps>(
  {} as TopLoadingBarContextProps
);

export function useTopLoadingBarProvider(props: UseTopLoadingBarProviderProps) {
  const { color = "primary", children } = props;
  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const start = useCallback(() => {
    setIsAnimating(true);
    setProgress(0);
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    intervalRef.current = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          return prev;
        }
        return prev + Math.random() * 15;
      });
    }, 150);
  }, []);

  const complete = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setProgress(100);
    setTimeout(() => {
      setIsAnimating(false);
      setProgress(0);
    }, 200);
  }, []);

  const set = useCallback((value: number) => {
    setProgress(value);
    if (value >= 100) {
      setTimeout(() => {
        setIsAnimating(false);
        setProgress(0);
      }, 200);
    }
  }, []);

  return {
    color,
    progress,
    isAnimating,
    start,
    complete,
    set,
    children,
  };
}

export function useTopLoadingBarContext() {
  return useContext<TopLoadingBarContextProps>({
    context: TopLoadingBarContext,
    hookName: useTopLoadingBarProvider.name,
    providerName: TopLoadingBarContext.name,
  });
}
