import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table } from '../../Table';
import { TableCell } from '../../TableCell';
import { TableRow } from '../../TableRow';
import {
  mockUsers,
  userColumns,
  userKeyExtractor,
  type User,
} from '../../Table/stories/table.fixtures';
import { TableBody } from '../TableBody';
import type { TableBodyProps } from '../table-body.types';
import { testDefaultTableBody } from './TableBody.play';

const meta: Meta<TableBodyProps> = {
  title: 'Components/Estruturas/Table/TableBody',
  component: TableBody,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: (Story) => (
    <Table
      data={mockUsers}
      columns={userColumns}
      keyExtractor={userKeyExtractor}
    >
      <Story />
    </Table>
  ),
  args: {
    children: (user) => (
      <TableRow>
        <TableCell>{(user as User).name}</TableCell>
        <TableCell>{(user as User).email}</TableCell>
      </TableRow>
    ),
  },
};

export default meta;
type Story = StoryObj<TableBodyProps>;

export const Default: Story = {
  name: 'Padrão',
  play: testDefaultTableBody,
};
