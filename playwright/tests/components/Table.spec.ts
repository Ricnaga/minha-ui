import { test, expect } from '../test';

test.describe('Table', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-estruturas-table--default');
  });

  test('should render columns and rows', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
    await expect(
      canvas.getByRole('columnheader', { name: 'Nome' }),
    ).toBeVisible();
    await expect(canvas.getByRole('cell', { name: 'John Doe' })).toBeVisible();
  });

  test('should render empty state when there is no data', async ({ story }) => {
    await story.navigate('components-estruturas-table--empty');

    await expect(
      story.canvas.getByText(/nenhum registro encontrado/i),
    ).toBeVisible();
  });

  test('should render loading state keeping the header', async ({ story }) => {
    await story.navigate('components-estruturas-table--loading');

    const canvas = story.canvas;

    await expect(
      canvas.getByRole('columnheader', { name: 'Nome' }),
    ).toBeVisible();
  });

  test('should render error state', async ({ story }) => {
    await story.navigate('components-estruturas-table--error-state');

    await expect(
      story.canvas.getByText(/ocorreu um erro ao carregar/i),
    ).toBeVisible();
  });

  test('should render pagination controls', async ({ story }) => {
    await story.navigate('components-estruturas-table--paginated');

    await expect(
      story.canvas.getByRole('cell', { name: 'John Doe' }),
    ).toBeVisible();
  });
});
