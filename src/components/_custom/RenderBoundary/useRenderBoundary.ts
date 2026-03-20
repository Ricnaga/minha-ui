import type {
  RenderBoundaryProps,
  UseRenderBoundaryProps,
} from './render-boundary.types';

export function useRenderBoundary(props: UseRenderBoundaryProps) {
  const { loadingProps, errorProps, children } = props;

  const renderBoundaryProps: RenderBoundaryProps = {
    ...props,
  };

  return { renderBoundaryProps, loadingProps, errorProps, children };
}
