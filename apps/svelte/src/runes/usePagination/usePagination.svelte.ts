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
}: UsePaginationProps<T> = {}) {
  let pagination = $state<PaginationState>({
    pageNumber,
    pageSize,
  });

  const actualTotalItems = $derived.by(() => {
    if (typeof totalItems === 'number') return totalItems;
    return items.length;
  });

  const totalPages = $derived.by(() => {
    return actualTotalItems
      ? Math.ceil(actualTotalItems / pagination.pageSize)
      : 0;
  });

  const currentPageItems = $derived.by(() => {
    if (!items.length) return [] as T[];
    const start = (pagination.pageNumber - 1) * pagination.pageSize;
    const end = start + pagination.pageSize;
    return items.slice(start, end);
  });

  const onNextPage = () => {
    pagination = {
      ...pagination,
      pageNumber: totalPages
        ? Math.min(pagination.pageNumber + 1, totalPages)
        : pagination.pageNumber + 1,
    };
  };

  const onPrevPage = () => {
    pagination = {
      ...pagination,
      pageNumber: Math.max(pagination.pageNumber - 1, 1),
    };
  };

  const setPageNumber = (num: number) => {
    pagination = {
      ...pagination,
      pageNumber: totalPages
        ? Math.min(Math.max(1, num), totalPages)
        : Math.max(1, num),
    };
  };

  const setPageSize = (size: number) => {
    pagination = {
      pageSize: Math.max(1, size),
      pageNumber: 1,
    };
  };

  return {
    get pagination() {
      return pagination;
    },
    onNextPage,
    onPrevPage,
    setPageNumber,
    setPageSize,
    get currentPageItems() {
      return currentPageItems;
    },
    get totalPages() {
      return totalPages;
    },
    get totalItems() {
      return actualTotalItems;
    },
  };
}
