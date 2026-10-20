import type { ReactNode } from 'react';
import type { SuspenseProps } from 'react';
import type { ErrorBoundaryProps } from '../../ErrorBoundary';

export type RenderBoundaryLoadingProps = SuspenseProps;

export type RenderBoundaryErrorProps = ErrorBoundaryProps;

export interface UseRenderBoundaryProps {
  loadingProps?: RenderBoundaryLoadingProps;
  errorProps?: RenderBoundaryErrorProps;
  children?: ReactNode;
}

export type RenderBoundaryProps = UseRenderBoundaryProps;
