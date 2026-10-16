import { table as tableTheme } from '@/theme';
import { useTablePagination } from '../../TableProvider/useTablePagination';
import type { TableConfigContextProps } from '../../TableProvider/table-provider.types';
import type { UseTableBoundaryProps } from './table-boundary.types';

export function useTableBoundary(props: UseTableBoundaryProps) {
  const {
    columns,
    size = 'md',
    bordered = false,
    striped = false,
    hover = true,
    stickyHeader = false,
    paginationProps,
  } = props;

  const { root, table } = tableTheme({ size, bordered, stickyHeader });
  const pagination = useTablePagination([], paginationProps);

  const config: TableConfigContextProps = {
    columns,
    size,
    bordered,
    striped,
    hover,
    stickyHeader,
    pagination: {
      enabled: pagination.enabled,
      pageNumber: pagination.pageNumber,
      pageSize: pagination.pageSize,
      totalItems: pagination.totalItems,
      totalPages: pagination.totalPages,
      onPageChange: pagination.handlePageChange,
    },
  };

  return { root, table, config, isPaginated: pagination.enabled };
}
