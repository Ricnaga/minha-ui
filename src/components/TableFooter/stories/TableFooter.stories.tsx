import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table } from '../../Table';
import { TableCell } from '../../TableCell';
import { TableRow } from '../../TableRow';
import {
  mockUsers,
  userColumns,
  userKeyExtractor,
  userRows,
} from '../../Table/stories/table.fixtures';
import { TableFooter } from '../TableFooter';
import type { TableFooterProps } from '../table-footer.types';
import { testDefaultTableFooter } from './TableFooter.play';

const meta: Meta<TableFooterProps> = {
  title: 'Components/Estruturas/Table/TableFooter',
  component: TableFooter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: (Story) => (
    <Table
      data={mockUsers.slice(0, 3)}
      columns={userColumns}
      keyExtractor={userKeyExtractor}
    >
      {userRows}
      <Story />
    </Table>
  ),
  args: {
    children: (
      <TableRow>
        <TableCell>Total</TableCell>
        <TableCell colSpan={2}>3 usuários</TableCell>
      </TableRow>
    ),
  },
};

export default meta;
type Story = StoryObj<TableFooterProps>;

export const Default: Story = {
  name: 'Padrão',
  play: testDefaultTableFooter,
};
