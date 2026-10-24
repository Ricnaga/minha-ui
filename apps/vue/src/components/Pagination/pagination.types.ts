import type { HTMLAttributes } from 'vue';

export type PaginationItem = number | '...';

export interface UsePaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange?: (page: number) => void;
}

export type PaginationProps = UsePaginationProps;

export interface UsePaginationButtonProps extends HTMLAttributes {
  onPageChange?: () => void;
  disabled?: boolean;
}

export type PaginationButtonProps = UsePaginationButtonProps;

export interface UsePaginationControlsProps extends HTMLAttributes {
  item: PaginationItem;
  currentPage: number;
  onPageChange?: () => void;
}

export type PaginationControlsProps = UsePaginationControlsProps;
