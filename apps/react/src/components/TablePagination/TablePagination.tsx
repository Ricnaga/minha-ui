import { table } from '@/theme';
import { Pagination } from '../Pagination';
import { useTableConfig } from '../TableProvider/useTableProvider';
import type { TablePaginationProps } from './table-pagination.types';

export function TablePagination(props: TablePaginationProps) {
  const { className } = props;
  const { pagination } = useTableConfig();
  const { paginationWrapper } = table();

  if (!pagination.enabled) return null;

  return (
    <div className={paginationWrapper({ className })}>
      <Pagination
        totalPages={pagination.totalPages}
        currentPage={pagination.pageNumber}
        onPageChange={pagination.onPageChange}
      />
    </div>
  );
}
