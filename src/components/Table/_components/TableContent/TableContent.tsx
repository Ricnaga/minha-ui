import { TableBody } from '../../../TableBody';
import { TableStatus } from '../TableStatus/TableStatus';
import type { TableChildren, TableStatusValue } from '../../table.types';

interface TableContentProps<T> {
  status: TableStatusValue | null;
  children?: TableChildren<T>;
}

export function TableContent<T>({ status, children }: TableContentProps<T>) {
  if (status) return <TableStatus status={status} />;
  if (typeof children === 'function')
    return <TableBody<T>>{children}</TableBody>;
  return <>{children}</>;
}
