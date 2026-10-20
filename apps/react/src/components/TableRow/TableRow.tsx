import { table } from '@/theme';
import type { TableRowProps } from './table-row.types';
import { useTableConfig } from '../TableProvider/useTableProvider';

export function TableRow(props: TableRowProps) {
  const { className, ...rest } = props;
  const { striped, hover } = useTableConfig();
  const { row } = table({ striped, hover });

  return <tr className={row({ className })} {...rest} />;
}
