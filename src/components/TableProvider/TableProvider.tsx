import type {
  TableDataContextProps,
  TableProviderProps,
} from './table-provider.types';
import {
  TableConfigContext,
  TableDataContext,
  useTableProvider,
} from './useTableProvider';

export function TableProvider<T>(props: TableProviderProps<T>) {
  const { children, ...rest } = props;
  const { config, data } = useTableProvider<T>(rest);

  return (
    <TableConfigContext.Provider value={config}>
      <TableDataContext.Provider
        value={data as unknown as TableDataContextProps}
      >
        {children}
      </TableDataContext.Provider>
    </TableConfigContext.Provider>
  );
}
