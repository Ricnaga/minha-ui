import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table } from '../Table';
import type { TableProps } from '../table.types';
import {
  mockUsers,
  renderUserRows,
  userColumns,
  userKeyExtractor,
  type User,
} from './table.fixtures';
import {
  testDefault,
  testEmpty,
  testError,
  testLoading,
  testPaginated,
} from './Table.play';

const renderTable = (tableProps: Partial<TableProps<User>> = {}) => (
  <Table
    data={mockUsers}
    columns={userColumns}
    keyExtractor={userKeyExtractor}
    {...tableProps}
  >
    {renderUserRows}
  </Table>
);

const meta: Meta<TableProps> = {
  title: 'Components/Estruturas/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TableProps>;

export const Default: Story = {
  name: 'Padrão',
  render: () => renderTable(),
  play: testDefault,
};

export const Empty: Story = {
  name: 'Vazio',
  render: () => renderTable({ data: [] }),
  play: testEmpty,
};

export const Loading: Story = {
  name: 'Carregando',
  render: () => renderTable({ isLoading: true }),
  play: testLoading,
};

export const ErrorState: Story = {
  name: 'Erro',
  render: () => renderTable({ isError: true }),
  play: testError,
};

export const Paginated: Story = {
  name: 'Paginado',
  render: () => renderTable({ paginationProps: { pageSize: 4 } }),
  play: testPaginated,
};

export const ServerSide: Story = {
  name: 'Server-side',
  render: () =>
    renderTable({
      data: mockUsers.slice(0, 4),
      paginationProps: {
        pageNumber: 1,
        pageSize: 4,
        totalItems: mockUsers.length,
      },
    }),
};

export const Striped: Story = {
  name: 'Zebrado',
  render: () => renderTable({ striped: true }),
};

export const Bordered: Story = {
  name: 'Com bordas',
  render: () => renderTable({ bordered: true }),
};

export const StickyHeader: Story = {
  name: 'Cabeçalho fixo',
  render: () => renderTable({ stickyHeader: true }),
};

export const Sizes: Story = {
  name: 'Tamanhos',
  render: () => (
    <div className="flex flex-col gap-8">
      {(['sm', 'md', 'lg'] as const).map((size) => (
        <Table
          key={size}
          data={mockUsers.slice(0, 3)}
          columns={userColumns}
          keyExtractor={userKeyExtractor}
          size={size}
        >
          {renderUserRows}
        </Table>
      ))}
    </div>
  ),
};
