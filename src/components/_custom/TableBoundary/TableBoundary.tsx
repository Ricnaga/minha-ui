import { TableHeader } from '../../Table/_components/TableHeader/TableHeader';
import { TableStatus } from '../../Table/_components/TableStatus/TableStatus';
import { TablePagination } from '../../TablePagination';
import { TableConfigContext } from '../../TableProvider/useTableProvider';
import { RenderBoundary } from '../RenderBoundary';
import type { TableBoundaryProps } from './table-boundary.types';
import { useTableBoundary } from './useTableBoundary';

export function TableBoundary(props: TableBoundaryProps) {
  const { loadingProps, errorProps, children } = props;
  const { root, table, config, isPaginated } = useTableBoundary(props);

  return (
    <TableConfigContext.Provider value={config}>
      <div className={root()}>
        <table className={table()}>
          <TableHeader />
          <RenderBoundary
            loadingProps={
              loadingProps ?? { fallback: <TableStatus status="loading" /> }
            }
            errorProps={
              errorProps ?? { fallback: <TableStatus status="error" /> }
            }
          >
            {children}
          </RenderBoundary>
        </table>
      </div>
      {isPaginated && <TablePagination />}
    </TableConfigContext.Provider>
  );
}
