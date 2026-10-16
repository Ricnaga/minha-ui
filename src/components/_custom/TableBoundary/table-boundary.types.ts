import type { ReactNode, SuspenseProps } from 'react';
import type { TableVariants } from '@/theme';
import type { ErrorBoundaryProps } from '../../ErrorBoundary';
import type {
  TableColumn,
  TablePaginationConfig,
} from '../../Table/table.types';

export interface UseTableBoundaryProps extends TableVariants {
  columns: TableColumn[];
  paginationProps?: TablePaginationConfig;
  loadingProps?: SuspenseProps;
  errorProps?: ErrorBoundaryProps;
  children: ReactNode;
}

export type TableBoundaryProps = UseTableBoundaryProps;
