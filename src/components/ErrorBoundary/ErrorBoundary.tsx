import type { ErrorBoundaryProps } from "./error-boundary.types";
import { useErrorBoundary } from "./useErrorBoundary";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

export function ErrorBoundary(props: ErrorBoundaryProps) {
  const { errorBoundaryProps } = useErrorBoundary(props);

  return <ReactErrorBoundary {...errorBoundaryProps} />;
}
