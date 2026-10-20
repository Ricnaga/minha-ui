import { createContext, useContext as useReactContext } from 'react';
import { useContext } from '@/hooks';
import { useTablePagination } from './useTablePagination';
import type {
  TableConfigContextProps,
  TableDataContextProps,
  UseTableProviderProps,
} from './table-provider.types';

export const TableConfigContext = createContext<TableConfigContextProps>(
  {} as TableConfigContextProps,
);

export const TableDataContext = createContext<
  TableDataContextProps | undefined
>(undefined);

export function useTableConfig() {
  return useContext({
    context: TableConfigContext,
    hookName: useTableConfig.name,
    providerName: TableConfigContext.name,
  });
}

export function useTableData<T = unknown>() {
  return useReactContext(TableDataContext) as
    TableDataContextProps<T> | undefined;
}

export function useTableProvider<T>(props: UseTableProviderProps<T>) {
  const {
    data,
    keyExtractor,
    columns,
    isLoading = false,
    isError = false,
    loadingProps,
    emptyProps,
    errorProps,
    paginationProps,
    size = 'md',
    bordered = false,
    striped = false,
    hover = true,
    stickyHeader = false,
  } = props;

  const pagination = useTablePagination(data, paginationProps);

  const config: TableConfigContextProps = {
    columns,
    size,
    bordered,
    striped,
    hover,
    stickyHeader,
    pagination: {
      enabled: pagination.enabled,
      pageNumber: pagination.pageNumber,
      pageSize: pagination.pageSize,
      totalItems: pagination.totalItems,
      totalPages: pagination.totalPages,
      onPageChange: pagination.handlePageChange,
    },
  };

  const tableData: TableDataContextProps<T> = {
    data: pagination.items,
    keyExtractor,
    isLoading,
    isError,
    loadingProps,
    emptyProps,
    errorProps,
  };

  return { config, data: tableData };
}
