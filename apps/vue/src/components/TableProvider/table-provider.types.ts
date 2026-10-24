import type { EmptyStateProps } from '../EmptyState';
import type { ErrorStateProps } from '../ErrorState';
import type { TableVariants } from '@/theme';
import type {
  TableColumn,
  TableKeyExtractor,
  TableLoadingProps,
  TablePaginationConfig,
  TablePaginationState,
} from '../Table/table.types';

export interface UseTableProviderProps<T = unknown> extends TableVariants {
  data: T[];
  keyExtractor: TableKeyExtractor<T>;
  columns: TableColumn[];
  isLoading?: boolean;
  isError?: boolean;
  loadingProps?: TableLoadingProps;
  emptyProps?: EmptyStateProps;
  errorProps?: ErrorStateProps;
  paginationProps?: TablePaginationConfig;
}

export type TableProviderProps<T = unknown> = UseTableProviderProps<T> & { children?: any };

export interface TableConfigContextProps {
  columns: TableColumn[];
  size: NonNullable<TableVariants['size']>;
  bordered: boolean;
  striped: boolean;
  hover: boolean;
  stickyHeader: boolean;
  pagination: TablePaginationState;
}

export interface TableDataContextProps<T = unknown> {
  data: T[];
  keyExtractor: TableKeyExtractor<T>;
  isLoading: boolean;
  isError: boolean;
  loadingProps?: TableLoadingProps;
  emptyProps?: EmptyStateProps;
  errorProps?: ErrorStateProps;
}
