import type { HTMLAttributes } from "react";

export interface UseTabsPanelProps extends HTMLAttributes<HTMLDivElement> {
  isLoading?: boolean;
  value: string;
}

export type TabsPanelProps = UseTabsPanelProps;
