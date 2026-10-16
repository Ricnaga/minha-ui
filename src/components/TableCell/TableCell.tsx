import { table } from '@/theme';
import type { TableCellProps } from './table-cell.types';
import { useTableConfig } from '../TableProvider/useTableProvider';

export function TableCell(props: TableCellProps) {
  const { align, className, ...rest } = props;
  const { size, bordered } = useTableConfig();
  const { cell } = table({ size, bordered, align });

  return <td className={cell({ className })} {...rest} />;
}
