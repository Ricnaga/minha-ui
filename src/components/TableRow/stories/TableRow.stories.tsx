import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table } from '../../Table';
import { TableBody } from '../../TableBody';
import { TableCell } from '../../TableCell';
import {
  mockUsers,
  userColumns,
  userKeyExtractor,
} from '../../Table/stories/table.fixtures';
import { TableRow } from '../TableRow';
import type { TableRowProps } from '../table-row.types';
import { testDefaultTableRow } from './TableRow.play';

const meta: Meta<TableRowProps> = {
  title: 'Components/Estruturas/Table/TableRow',
  component: TableRow,
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
      <TableBody>
        <Story />
      </TableBody>
    </Table>
  ),
  args: {
    children: (
      <>
        <TableCell>John Doe</TableCell>
        <TableCell>john.doe@example.com</TableCell>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<TableRowProps>;

export const Default: Story = {
  name: 'Padrão',
  play: testDefaultTableRow,
};
