import type {
  DataBoundaryProps,
  UseDataBoundaryProps,
} from "./data-boundary.types";

export function useDataBoundary(props: UseDataBoundaryProps) {
  // TODO: Implement hook logic
  const dataBoundaryProps: DataBoundaryProps = {
    ...props,
  };

  return { dataBoundaryProps };
}
