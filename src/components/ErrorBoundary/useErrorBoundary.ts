import type {
  ErrorBoundaryProps,
  UseErrorBoundaryProps,
} from "./error-boundary.types";

export function useErrorBoundary(props: UseErrorBoundaryProps) {
  const errorBoundaryProps: ErrorBoundaryProps = {
    ...props,
  };

  return { errorBoundaryProps };
}
