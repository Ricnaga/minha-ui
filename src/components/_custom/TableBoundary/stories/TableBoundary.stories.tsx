import type { Meta, StoryObj } from '@storybook/react-vite';
import { promiseWrapper } from 'src/infra/fetchers/wrapper';
import { TableBody } from '../../../TableBody';
import {
  mockUsers,
  renderUserRows,
  userColumns,
  userKeyExtractor,
  type User,
} from '../../../Table/stories/table.fixtures';
import { TableBoundary } from '../TableBoundary';
import type { TableBoundaryProps } from '../table-boundary.types';
import {
  testCustomErrorFallback,
  testCustomLoadingFallback,
  testDefault,
  testError,
  testLoading,
  testPaginated,
} from './TableBoundary.play';

interface Readable<T> {
  read: () => T;
}

const usersResource = promiseWrapper<User[]>(() =>
  Promise.resolve(mockUsers.slice(0, 3)),
);

const pendingResource = promiseWrapper<User[]>(
  () => new Promise<User[]>(() => {}),
);

const errorResource = promiseWrapper<User[]>(() =>
  Promise.reject(new Error('Falha ao carregar')),
);

const UsersBody = ({ resource }: { resource: Readable<User[]> }) => {
  const users = resource.read();

  return (
    <TableBody data={users} keyExtractor={userKeyExtractor}>
      {renderUserRows}
    </TableBody>
  );
};

const meta: Meta<TableBoundaryProps> = {
  title: 'Components/Customizados/TableBoundary',
  component: TableBoundary,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    columns: userColumns,
  },
};

export default meta;
type Story = StoryObj<TableBoundaryProps>;

export const Default: Story = {
  name: 'Padrão',
  render: (args) => (
    <TableBoundary {...args}>
      <UsersBody resource={usersResource} />
    </TableBoundary>
  ),
  play: testDefault,
};

export const Loading: Story = {
  name: 'Carregando',
  render: (args) => (
    <TableBoundary {...args}>
      <UsersBody resource={pendingResource} />
    </TableBoundary>
  ),
  play: testLoading,
};

export const ErrorState: Story = {
  name: 'Erro',
  render: (args) => (
    <TableBoundary {...args}>
      <UsersBody resource={errorResource} />
    </TableBoundary>
  ),
  play: testError,
};

export const CustomLoadingFallback: Story = {
  name: 'Fallback de carregamento',
  args: {
    loadingProps: {
      fallback: <div data-testid="custom-loading">Carregando usuários...</div>,
    },
  },
  render: (args) => (
    <TableBoundary {...args}>
      <UsersBody resource={pendingResource} />
    </TableBoundary>
  ),
  play: testCustomLoadingFallback,
};

export const CustomErrorFallback: Story = {
  name: 'Fallback de erro',
  args: {
    errorProps: {
      fallback: <div data-testid="custom-error">Não foi possível carregar</div>,
    },
  },
  render: (args) => (
    <TableBoundary {...args}>
      <UsersBody resource={errorResource} />
    </TableBoundary>
  ),
  play: testCustomErrorFallback,
};

export const ServerSide: Story = {
  name: 'Server-side',
  args: {
    paginationProps: { pageNumber: 1, pageSize: 3, totalItems: 10 },
  },
  render: (args) => (
    <TableBoundary {...args}>
      <UsersBody resource={usersResource} />
    </TableBoundary>
  ),
  play: testPaginated,
};
