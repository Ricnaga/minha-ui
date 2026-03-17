import type { ReactNode } from "react";

export interface LoadingProps {
  isLoading?: boolean;
  fallback?: ReactNode;
}

export interface ErrorProps {
  isError?: boolean;
  fallback?: ReactNode;
}

export interface UseDataBoundaryProps<T = unknown> {
  loadingProps?: LoadingProps;
  errorProps?: ErrorProps;
  data?: T;
  children?: ReactNode | ((props: { data: NonNullable<T> }) => ReactNode);
}

export type DataBoundaryProps<T = unknown> = UseDataBoundaryProps<T>;
