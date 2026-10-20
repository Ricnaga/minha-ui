import { table as tableTheme } from '@/theme';
import { useTableConfig } from '../../../TableProvider/useTableProvider';

export function TableHeader() {
  const { columns, size, bordered, stickyHeader } = useTableConfig();
  const { header, headerRow, head } = tableTheme({
    size,
    bordered,
    stickyHeader,
  });

  return (
    <thead className={header()}>
      <tr className={headerRow()}>
        {columns.map(({ id, label, align, className, ...thProps }) => (
          <th
            key={id}
            {...thProps}
            scope="col"
            className={head({ align, className })}
          >
            {label}
          </th>
        ))}
      </tr>
    </thead>
  );
}
