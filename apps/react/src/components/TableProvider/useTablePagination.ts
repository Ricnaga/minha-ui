import { useMemo, useState } from 'react';
import type { UseTableProviderProps } from './table-provider.types';

type PaginationConfig<T> = UseTableProviderProps<T>['paginationProps'];

export function useTablePagination<T>(data: T[], config: PaginationConfig<T>) {
  const [internalPage, setInternalPage] = useState(1);

  const pageSize = config?.pageSize ?? 10;
  const isServer = config?.totalItems !== undefined;
  const isControlled = config?.pageNumber !== undefined;
  const pageNumber = isControlled ? (config?.pageNumber ?? 1) : internalPage;
  const totalItems = config?.totalItems ?? data.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  const handlePageChange = (page: number) => {
    if (!isControlled) setInternalPage(page);
    config?.onPageChange?.(page);
  };

  const items = useMemo(() => {
    if (!config || isServer) return data;
    const start = (pageNumber - 1) * pageSize;
    return data.slice(start, start + pageSize);
  }, [config, isServer, data, pageNumber, pageSize]);

  return {
    enabled: Boolean(config),
    pageNumber,
    pageSize,
    totalItems,
    totalPages,
    items,
    handlePageChange,
  };
}
