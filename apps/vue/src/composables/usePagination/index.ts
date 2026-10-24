import { computed, ref } from 'vue';

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
  const pagination = ref<PaginationState>({
    pageNumber,
    pageSize,
  });

  const actualTotalItems = computed(() => {
    if (typeof totalItems === 'number') return totalItems;
    return items.length;
  });

  const totalPages = computed(() => {
    return actualTotalItems.value
      ? Math.ceil(actualTotalItems.value / pagination.value.pageSize)
      : 0;
  });

  const currentPageItems = computed(() => {
    if (!items.length) return [] as T[];
    const start = (pagination.value.pageNumber - 1) * pagination.value.pageSize;
    const end = start + pagination.value.pageSize;
    return items.slice(start, end);
  });

  const onNextPage = () => {
    pagination.value = {
      ...pagination.value,
      pageNumber: totalPages.value
        ? Math.min(pagination.value.pageNumber + 1, totalPages.value)
        : pagination.value.pageNumber + 1,
    };
  };

  const onPrevPage = () => {
    pagination.value = {
      ...pagination.value,
      pageNumber: Math.max(pagination.value.pageNumber - 1, 1),
    };
  };

  const setPageNumber = (num: number) => {
    pagination.value = {
      ...pagination.value,
      pageNumber: totalPages.value
        ? Math.min(Math.max(1, num), totalPages.value)
        : Math.max(1, num),
    };
  };

  const setPageSize = (size: number) => {
    pagination.value = {
      pageSize: Math.max(1, size),
      pageNumber: 1,
    };
  };

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
