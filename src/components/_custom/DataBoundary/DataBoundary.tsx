import type { DataBoundaryProps } from "./data-boundary.types";
import { useDataBoundary } from "./useDataBoundary";

export function DataBoundary<T>(props: DataBoundaryProps<T>) {
  const { dataBoundaryProps, renderContent } = useDataBoundary<T>(props);
  
  return (
    <div {...dataBoundaryProps}>
      {renderContent()}
    </div>
  );
}