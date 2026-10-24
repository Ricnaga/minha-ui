import type { HTMLAttributes } from 'vue';
import type { TableColumnAlign } from '../Table/table.types';

export interface UseTableCellProps extends HTMLAttributes {
  align?: TableColumnAlign;
}

export type TableCellProps = UseTableCellProps;
