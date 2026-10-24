export interface UseTableBodyProps<T = unknown> {
  children?: any | ((item: T, index: number) => any);
  className?: string;
  data?: T[];
  keyExtractor?: (item: T, index: number) => string | number;
}

export type TableBodyProps<T = unknown> = UseTableBodyProps<T>;
