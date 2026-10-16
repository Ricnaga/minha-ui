import { Fragment } from 'react';
import { table } from '@/theme';
import { useTableData } from '../TableProvider/useTableProvider';
import type { TableBodyProps } from './table-body.types';

export function TableBody<T>(props: TableBodyProps<T>) {
  const { children, className, data: dataProp, keyExtractor: keyProp } = props;
  const context = useTableData<T>();
  const { body } = table();

  const data = dataProp ?? context?.data ?? [];
  const keyExtractor = keyProp ?? context?.keyExtractor;

  const content =
    typeof children === 'function'
      ? data.map((item, index) => (
          <Fragment key={keyExtractor?.(item, index) ?? index}>
            {children(item, index)}
          </Fragment>
        ))
      : children;

  return <tbody className={body({ className })}>{content}</tbody>;
}
