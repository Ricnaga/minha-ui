import { table as tableTheme } from '@/theme';
import {
  useTableConfig,
  useTableData,
} from '../TableProvider/useTableProvider';
import type { TableStatusValue } from './table.types';

function getStatus(
  isLoading: boolean,
  isError: boolean,
  isEmpty: boolean,
): TableStatusValue | null {
  if (isLoading) return 'loading';
  if (isError) return 'error';
  if (isEmpty) return 'empty';
  return null;
}

export function useTable() {
  const { size, bordered, stickyHeader } = useTableConfig();
  const {
    data = [],
    isLoading = false,
    isError = false,
  } = useTableData() ?? {};

  const { root, table } = tableTheme({ size, bordered, stickyHeader });
  const status = getStatus(isLoading, isError, data.length === 0);

  return { root, table, status };
}
