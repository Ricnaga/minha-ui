import type { ReactNode } from 'react';
import { EmptyState } from '../../../EmptyState';
import { ErrorState } from '../../../ErrorState';
import { Skeleton } from '../../../Skeleton';
import { table } from '@/theme';
import {
  useTableConfig,
  useTableData,
} from '../../../TableProvider/useTableProvider';
import type { TableColumn, TableStatusValue } from '../../table.types';

interface TableStatusProps {
  status: TableStatusValue;
}

function getColSpan(columns: TableColumn[]) {
  return columns.reduce((total, column) => total + (column.colSpan ?? 1), 0);
}

interface SkeletonRowsProps {
  columns: TableColumn[];
  rows: number;
}

function SkeletonRows({ columns, rows }: SkeletonRowsProps) {
  const { size, bordered, striped } = useTableConfig();
  const { row, cell } = table({ size, bordered, striped, hover: false });

  return (
    <tbody>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <tr key={rowIndex} className={row()}>
          {columns.map((column) => (
            <td key={column.id} colSpan={column.colSpan} className={cell()}>
              <Skeleton className="h-4 w-full" />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

interface StatusCellProps {
  columns: TableColumn[];
  children: ReactNode;
}

function StatusCell({ columns, children }: StatusCellProps) {
  const { stateCell } = table();

  return (
    <tbody>
      <tr>
        <td colSpan={getColSpan(columns)} className={stateCell()}>
          {children}
        </td>
      </tr>
    </tbody>
  );
}

export function TableStatus({ status }: TableStatusProps) {
  const { columns } = useTableConfig();
  const { loadingProps, emptyProps, errorProps } = useTableData() ?? {};

  switch (status) {
    case 'loading':
      if (loadingProps?.fallback) {
        return (
          <StatusCell columns={columns}>{loadingProps.fallback}</StatusCell>
        );
      }
      return <SkeletonRows columns={columns} rows={loadingProps?.rows ?? 3} />;
    case 'empty':
      return (
        <StatusCell columns={columns}>
          <EmptyState title="Nenhum registro encontrado" {...emptyProps} />
        </StatusCell>
      );
    case 'error':
      return (
        <StatusCell columns={columns}>
          <ErrorState title="Ocorreu um erro ao carregar" {...errorProps} />
        </StatusCell>
      );
  }
}
