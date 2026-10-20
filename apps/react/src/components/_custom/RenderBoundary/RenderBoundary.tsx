import { Suspense } from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import type { RenderBoundaryProps } from './render-boundary.types';
import { useRenderBoundary } from './useRenderBoundary';

const defaultErrorFallback = () => <div>ocorreu um erro!</div>;

export function RenderBoundary(props: RenderBoundaryProps) {
  const { loadingProps, errorProps, children } = useRenderBoundary(props);

  const errorFallback = errorProps?.fallback;
  const errorFallbackRender =
    errorProps?.fallbackRender ??
    (errorFallback ? () => errorFallback : undefined) ??
    defaultErrorFallback;

  const { onError, onReset, resetKeys } = errorProps ?? {};

  return (
    <ReactErrorBoundary
      fallbackRender={errorFallbackRender}
      onError={onError}
      onReset={onReset}
      resetKeys={resetKeys}
    >
      <Suspense {...loadingProps}>{children}</Suspense>
    </ReactErrorBoundary>
  );
}
