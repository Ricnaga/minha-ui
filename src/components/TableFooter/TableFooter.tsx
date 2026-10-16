import { table } from '@/theme';
import type { TableFooterProps } from './table-footer.types';
import { useTableConfig } from '../TableProvider/useTableProvider';

export function TableFooter(props: TableFooterProps) {
  const { className, ...rest } = props;
  const { bordered } = useTableConfig();
  const { footer } = table({ bordered });

  return <tfoot className={footer({ className })} {...rest} />;
}
