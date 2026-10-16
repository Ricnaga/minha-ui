import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table } from '../../Table';
import { TableBody } from '../../TableBody';
import { TableRow } from '../../TableRow';
import {
  mockUsers,
  userColumns,
  userKeyExtractor,
} from '../../Table/stories/table.fixtures';
import { TableCell } from '../TableCell';
import type { TableCellProps } from '../table-cell.types';
import { testDefaultTableCell } from './TableCell.play';

const meta: Meta<TableCellProps> = {
  title: 'Components/Estruturas/Table/TableCell',
  component: TableCell,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    align: {
      description: 'Define o alinhamento horizontal do conteúdo da célula.',
      control: { type: 'select' },
      options: ['left', 'center', 'right'],
      table: {
        type: { summary: `"left" | "center" | "right"` },
        defaultValue: { summary: 'left' },
        category: 'Layout',
      },
    },
  },
  decorators: (Story) => (
    <Table
      data={mockUsers}
      columns={userColumns}
      keyExtractor={userKeyExtractor}
    >
      <TableBody>
        <TableRow>
          <Story />
        </TableRow>
      </TableBody>
    </Table>
  ),
  args: {
    children: 'John Doe',
  },
};

export default meta;
type Story = StoryObj<TableCellProps>;

export const Default: Story = {
  name: 'Padrão',
  play: testDefaultTableCell,
};
