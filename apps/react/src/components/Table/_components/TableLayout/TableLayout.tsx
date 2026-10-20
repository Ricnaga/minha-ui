import type { TableChildren } from '../../table.types';
import { useTable } from '../../useTable';
import { TableContent } from '../TableContent/TableContent';
import { TableHeader } from '../TableHeader/TableHeader';

interface TableLayoutProps<T> {
  className?: string;
  children?: TableChildren<T>;
}

export function TableLayout<T>({ className, children }: TableLayoutProps<T>) {
  const { root, table, status } = useTable();

  return (
    <div className={root({ className })}>
      <table className={table()}>
        <TableHeader />
        <TableContent status={status}>{children}</TableContent>
      </table>
    </div>
  );
}
