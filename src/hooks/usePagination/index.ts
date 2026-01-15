import { useState, useMemo, useCallback } from "react";

type PaginationState = {
  pageNumber: number;
  pageSize: number;
};

interface UsePaginationProps<T> extends Partial<PaginationState> {
  items?: T[];
  totalItems?: number;
}

export function usePagination<T = unknown>({
  pageNumber = 1,
  pageSize = 10,
  items = [],
  totalItems,
}: UsePaginationProps<T>) {
  const [pagination, setPagination] = useState<PaginationState>({
    pageNumber,
    pageSize,
  });
  const actualTotalItems = useMemo(() => {
    if (typeof totalItems === "number") return totalItems;
    return items.length;
  }, [totalItems, items]);

  const totalPages = useMemo(() => {
    return actualTotalItems
      ? Math.ceil(actualTotalItems / pagination.pageSize)
      : 0;
  }, [actualTotalItems, pagination.pageSize]);

  const currentPageItems = useMemo(() => {
    if (!items.length) return [];
    const start = (pagination.pageNumber - 1) * pagination.pageSize;
    const end = start + pagination.pageSize;
    return items.slice(start, end);
  }, [items, pagination.pageNumber, pagination.pageSize]);

  const onNextPage = useCallback(() => {
    setPagination((prev) => ({
      ...prev,
      pageNumber: totalPages
        ? Math.min(prev.pageNumber + 1, totalPages)
        : prev.pageNumber + 1,
    }));
  }, [totalPages]);

  const onPrevPage = useCallback(() => {
    setPagination((prev) => ({
      ...prev,
      pageNumber: Math.max(prev.pageNumber - 1, 1),
    }));
  }, []);

  const setPageNumber = useCallback(
    (num: number) => {
      setPagination((prev) => ({
        ...prev,
        pageNumber: totalPages
          ? Math.min(Math.max(1, num), totalPages)
          : Math.max(1, num),
      }));
    },
    [totalPages]
  );

  const setPageSize = useCallback(
    (size: number) =>
      setPagination((prev) => ({
        ...prev,
        pageSize: Math.max(1, size),
        pageNumber: 1,
      })),
    []
  );

  return {
    pagination,
    onNextPage,
    onPrevPage,
    setPageNumber,
    setPageSize,
    currentPageItems,
    totalPages,
    totalItems: actualTotalItems,
  };
}
