import type { ReactNode, ThHTMLAttributes } from 'react';
import type { UseTableProviderProps } from '../TableProvider/table-provider.types';

export type TableColumnAlign = 'left' | 'center' | 'right';

export interface TableColumn extends Omit<
  ThHTMLAttributes<HTMLTableCellElement>,
  'align' | 'children' | 'id'
> {
  id: string;
  label: ReactNode;
  align?: TableColumnAlign;
}

export type TableKeyExtractor<T> = (item: T, index: number) => string | number;

export interface TableLoadingProps {
  rows?: number;
  fallback?: ReactNode;
}

export interface TablePaginationConfig {
  pageNumber?: number;
  pageSize?: number;
  totalItems?: number;
  onPageChange?: (pageNumber: number) => void;
}

export interface TablePaginationState {
  enabled: boolean;
  pageNumber: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

export type TableStatusValue = 'loading' | 'empty' | 'error';

export type TableChildren<T = unknown> =
  | ReactNode
  | ((item: T, index: number) => ReactNode);

export interface TableProps<T = unknown> extends UseTableProviderProps<T> {
  className?: string;
  children?: TableChildren<T>;
}
