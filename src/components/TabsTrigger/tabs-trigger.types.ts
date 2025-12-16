import type { ButtonHTMLAttributes } from "react";

export interface UseTabsTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  value: string;
}

export type TabsTriggerProps = UseTabsTriggerProps;
