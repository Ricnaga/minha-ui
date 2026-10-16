import type { ReactNode } from 'react';
import type { TableKeyExtractor } from '../Table/table.types';

export interface UseTableBodyProps<T = unknown> {
  children: ReactNode | ((item: T, index: number) => ReactNode);
  className?: string;
  data?: T[];
  keyExtractor?: TableKeyExtractor<T>;
}

export type TableBodyProps<T = unknown> = UseTableBodyProps<T>;
