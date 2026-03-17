import type { RequiredChildren } from "@/types";
import type { TopLoadingBarVariants } from "@/theme";

export type UseTopLoadingBarProviderProps = RequiredChildren & TopLoadingBarVariants;

export type TopLoadingBarProviderProps = UseTopLoadingBarProviderProps;

export interface TopLoadingBarContextProps {
  color: "primary" | "secondary" | "success" | "info" | "warning" | "error";
  start: () => void;
  complete: () => void;
  set: (progress: number) => void;
  progress: number;
  isAnimating: boolean;
}
