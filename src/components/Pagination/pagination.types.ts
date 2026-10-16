import type { PaginationVariants } from '@/theme';

export interface UsePaginationProps extends PaginationVariants {
  totalPages: number;
  currentPage?: number;
  onPageChange: (pageNumber: number) => void;
}

export type PaginationProps = UsePaginationProps;
