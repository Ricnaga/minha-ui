import type {
  DataBoundaryProps,
  UseDataBoundaryProps,
} from "./data-boundary.types";

export function useDataBoundary<T>(props: UseDataBoundaryProps<T>) {
  const { loadingProps, errorProps, data, children } = props;

  const hasData = data !== undefined && data !== null;
  const isLoading = loadingProps?.isLoading ?? false;
  const isError = errorProps?.isError ?? false;
  const loadingFallback = loadingProps?.fallback;
  const errorFallback = errorProps?.fallback;

  const renderContent = () => {
    if (isError) {
      return errorFallback ?? <div>ocorreu um erro!</div>;
    }

    if (isLoading) {
      return loadingFallback ?? <div>carregando...</div>;
    }

    if (hasData && children) {
      if (typeof children === "function") {
        return children({ data: data as T });
      }
      return children;
    }

    return null;
  };

  const dataBoundaryProps: DataBoundaryProps<T> = {
    ...props,
  };

  return { dataBoundaryProps, renderContent };
}
