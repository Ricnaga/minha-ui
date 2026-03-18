import type { ErrorBoundaryVariants } from "@/theme";
import { type ErrorBoundaryProps as ReactErrorBoundaryProps } from "react-error-boundary";

export type UseErrorBoundaryProps = ErrorBoundaryVariants &
  ReactErrorBoundaryProps;

export type ErrorBoundaryProps = UseErrorBoundaryProps;
