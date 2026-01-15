import type {
  RenderBoundaryProps,
  UseRenderBoundaryProps,
} from "./render-boundary.types";

export function useRenderBoundary(props: UseRenderBoundaryProps) {
  // TODO: Implement hook logic
  const renderBoundaryProps: RenderBoundaryProps = {
    ...props,
  };

  return { renderBoundaryProps };
}
