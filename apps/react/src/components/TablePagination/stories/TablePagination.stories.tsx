import type { Meta, StoryObj } from '@storybook/react-vite';
import { TableProvider } from '../../TableProvider';
import {
  mockUsers,
  userColumns,
  userKeyExtractor,
} from '../../Table/stories/table.fixtures';
import { TablePagination } from '../TablePagination';
import type { TablePaginationProps } from '../table-pagination.types';
import { testDefaultTablePagination } from './TablePagination.play';

const meta: Meta<TablePaginationProps> = {
  title: 'Components/Estruturas/Table/TablePagination',
  component: TablePagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: (Story) => (
    <TableProvider
      data={mockUsers}
      columns={userColumns}
      keyExtractor={userKeyExtractor}
      paginationProps={{ pageSize: 4 }}
    >
      <Story />
    </TableProvider>
  ),
};

export default meta;
type Story = StoryObj<TablePaginationProps>;

export const Default: Story = {
  name: 'Padrão',
  play: testDefaultTablePagination,
};
