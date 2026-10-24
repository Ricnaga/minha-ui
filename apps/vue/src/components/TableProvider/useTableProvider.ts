import { inject, provide } from 'vue';

import { useTablePagination } from './useTablePagination';
import type {
  TableConfigContextProps,
  TableDataContextProps,
  UseTableProviderProps,
} from './table-provider.types';

export const TableConfigContextKey = Symbol('TableConfigContext');
export const TableDataContextKey = Symbol('TableDataContext');

export function useTableConfig(): TableConfigContextProps {
  const context = inject<TableConfigContextProps>(TableConfigContextKey);
  if (!context) {
    throw new Error('useTableConfig must be used within a TableProvider');
  }
  return context;
}

export function useTableData<T = unknown>(): TableDataContextProps<T> | undefined {
  return inject<TableDataContextProps<T>>(TableDataContextKey);
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

  const config = {
    columns,
    size,
    bordered,
    striped,
    hover,
    stickyHeader,
    pagination: {
      enabled: pagination.enabled.value,
      pageNumber: pagination.pageNumber.value,
      pageSize: pagination.pageSize.value,
      totalItems: pagination.totalItems.value,
      totalPages: pagination.totalPages.value,
      onPageChange: pagination.handlePageChange,
    },
  } as TableConfigContextProps;

  const tableData = {
    data: pagination.items.value,
    keyExtractor,
    isLoading,
    isError,
    loadingProps,
    emptyProps,
    errorProps,
  } as TableDataContextProps<T>;

  provide(TableConfigContextKey, config);
  provide(TableDataContextKey, tableData);

  return { config, data: tableData };
}
