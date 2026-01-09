import type { PaginationVariants } from "@/theme";

export interface UsePaginationProps extends PaginationVariants {
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

export type PaginationProps = UsePaginationProps;
