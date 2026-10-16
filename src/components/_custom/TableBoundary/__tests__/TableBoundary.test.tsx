import { render, screen } from '@testing-library/react';
import { TableBoundary } from '../TableBoundary';
import type { TableColumn } from '../../../Table/table.types';

const columns: TableColumn[] = [{ id: 'name', label: 'Nome' }];

const pending = new Promise<never>(() => {});

const PendingChild = () => {
  throw pending;
};

const BoomChild = () => {
  throw new Error('boom');
};

describe('TableBoundary', () => {
  it('should render the column headers', () => {
    render(
      <TableBoundary columns={columns}>
        <tbody />
      </TableBoundary>,
    );

    expect(
      screen.getByRole('columnheader', { name: 'Nome' }),
    ).toBeInTheDocument();
  });

  it('should render the default loading fallback while suspending', async () => {
    render(
      <TableBoundary columns={columns}>
        <PendingChild />
      </TableBoundary>,
    );

    expect((await screen.findAllByRole('status')).length).toBeGreaterThan(0);
  });

  it('should render a custom loading fallback', async () => {
    render(
      <TableBoundary
        columns={columns}
        loadingProps={{ fallback: <p>Carregando</p> }}
      >
        <PendingChild />
      </TableBoundary>,
    );

    expect(await screen.findByText('Carregando')).toBeInTheDocument();
  });

  it('should render the default error fallback when a child throws', () => {
    render(
      <TableBoundary columns={columns}>
        <BoomChild />
      </TableBoundary>,
    );

    expect(
      screen.getByText(/ocorreu um erro ao carregar/i),
    ).toBeInTheDocument();
  });

  it('should render a custom error fallback', () => {
    render(
      <TableBoundary columns={columns} errorProps={{ fallback: <p>Falhou</p> }}>
        <BoomChild />
      </TableBoundary>,
    );

    expect(screen.getByText('Falhou')).toBeInTheDocument();
  });
});
