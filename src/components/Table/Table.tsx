import { TablePagination } from '../TablePagination';
import type { TableDataContextProps } from '../TableProvider/table-provider.types';
import {
  TableConfigContext,
  TableDataContext,
  useTableProvider,
} from '../TableProvider/useTableProvider';
import { TableLayout } from './_components/TableLayout/TableLayout';
import type { TableProps } from './table.types';

export function Table<T = unknown>(props: TableProps<T>) {
  const { children, paginationProps } = props;
  const { config, data } = useTableProvider<T>(props);

  return (
    <TableConfigContext.Provider value={config}>
      <TableDataContext.Provider
        value={data as unknown as TableDataContextProps}
      >
        <TableLayout className={props.className}>{children}</TableLayout>
        {paginationProps && <TablePagination />}
      </TableDataContext.Provider>
    </TableConfigContext.Provider>
  );
}
