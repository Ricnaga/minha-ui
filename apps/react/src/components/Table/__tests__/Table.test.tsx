import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Table } from '..';
import { TableBody } from '../../TableBody';
import { TableCell } from '../../TableCell';
import { TableRow } from '../../TableRow';
import type {
  TableColumn,
  TableKeyExtractor,
  TableProps,
} from '../table.types';

interface User {
  id: number;
  name: string;
}

const mockUsers: User[] = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Charlie Davis' },
];

const columns: TableColumn[] = [{ id: 'name', label: 'Nome' }];

const keyExtractor: TableKeyExtractor<User> = (user) => user.id;

function renderTable(tableProps: Partial<TableProps<User>> = {}) {
  return render(
    <Table
      data={mockUsers}
      columns={columns}
      keyExtractor={keyExtractor}
      {...tableProps}
    >
      {(user) => (
        <TableRow>
          <TableCell>{user.name}</TableCell>
        </TableRow>
      )}
    </Table>,
  );
}

describe('Table', () => {
  describe('Rendering', () => {
    it('should render the column header', () => {
      renderTable();
      expect(
        screen.getByRole('columnheader', { name: 'Nome' }),
      ).toBeInTheDocument();
    });

    it('should render a cell for each item inferred from the data', () => {
      renderTable();
      expect(
        screen.getByRole('cell', { name: 'John Doe' }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('cell', { name: 'Jane Smith' }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('cell', { name: 'Charlie Davis' }),
      ).toBeInTheDocument();
    });

    it('should render element children when body is not a function', () => {
      render(
        <Table data={mockUsers} columns={columns} keyExtractor={keyExtractor}>
          <TableBody>
            <TableRow>
              <TableCell>Conteúdo estático</TableCell>
            </TableRow>
          </TableBody>
        </Table>,
      );

      expect(
        screen.getByRole('cell', { name: 'Conteúdo estático' }),
      ).toBeInTheDocument();
    });
  });

  describe('States', () => {
    it('should render the empty state when there is no data', () => {
      renderTable({ data: [] });
      expect(screen.getByText(/nenhum registro/i)).toBeInTheDocument();
    });

    it('should render skeleton rows per column keeping the header', () => {
      renderTable({ isLoading: true });

      expect(
        screen.getByRole('columnheader', { name: 'Nome' }),
      ).toBeInTheDocument();
      // header row + 3 skeleton rows
      expect(screen.getAllByRole('row')).toHaveLength(4);
      // 3 skeleton rows × 1 column
      expect(screen.getAllByRole('status')).toHaveLength(3);
    });

    it('should render the error state', () => {
      renderTable({ isError: true });
      expect(
        screen.getByText(/ocorreu um erro ao carregar/i),
      ).toBeInTheDocument();
    });
  });

  describe('Pagination', () => {
    it('should not render pagination without paginationProps', () => {
      renderTable();
      expect(
        screen.queryByRole('button', { name: /próxima página/i }),
      ).not.toBeInTheDocument();
    });

    it('should render pagination when paginationProps is provided', () => {
      renderTable({ paginationProps: { pageSize: 2 } });
      expect(
        screen.getByRole('button', { name: /próxima página/i }),
      ).toBeInTheDocument();
    });

    it('should slice the data by page size', () => {
      renderTable({ paginationProps: { pageSize: 2 } });
      expect(
        screen.getByRole('cell', { name: 'John Doe' }),
      ).toBeInTheDocument();
      expect(
        screen.queryByRole('cell', { name: 'Charlie Davis' }),
      ).not.toBeInTheDocument();
    });

    it('should show the next page when navigating', async () => {
      const user = userEvent.setup();
      renderTable({ paginationProps: { pageSize: 2 } });

      await user.click(screen.getByRole('button', { name: /próxima página/i }));

      expect(
        screen.getByRole('cell', { name: 'Charlie Davis' }),
      ).toBeInTheDocument();
    });

    it('should call onPageChange in server-side mode', async () => {
      const user = userEvent.setup();
      const onPageChange = vi.fn();

      renderTable({
        data: mockUsers.slice(0, 2),
        paginationProps: {
          pageNumber: 1,
          pageSize: 2,
          totalItems: mockUsers.length,
          onPageChange,
        },
      });

      await user.click(screen.getByRole('button', { name: /próxima página/i }));

      expect(onPageChange).toHaveBeenCalledWith(2);
    });
  });

  describe('Responsividade', () => {
    it('should keep horizontal scroll on the root container', () => {
      const { container } = renderTable();
      const root = container.firstElementChild;

      expect(root).toHaveClass('overflow-x-auto', 'min-w-0');
    });

    it('should apply responsive padding on cells', () => {
      renderTable({ size: 'md' });
      const cell = screen.getByRole('cell', { name: 'John Doe' });

      expect(cell).toHaveClass('px-2', 'sm:px-3', 'sm:py-3');
    });
  });
});
