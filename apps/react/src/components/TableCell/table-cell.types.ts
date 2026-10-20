import type { TdHTMLAttributes } from 'react';
import type { TableColumnAlign } from '../Table/table.types';

export interface UseTableCellProps extends Omit<
  TdHTMLAttributes<HTMLTableCellElement>,
  'align'
> {
  align?: TableColumnAlign;
}

export type TableCellProps = UseTableCellProps;
