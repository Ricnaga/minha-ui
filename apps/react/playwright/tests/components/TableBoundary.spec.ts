import { test, expect } from '../test';

test.describe('TableBoundary', () => {
  test('should render columns and rows after resolving', async ({ story }) => {
    await story.navigate('components-customizados-tableboundary--default');

    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
    await expect(
      canvas.getByRole('columnheader', { name: 'Nome' }),
    ).toBeVisible();
    await expect(canvas.getByRole('cell', { name: 'John Doe' })).toBeVisible();
  });

  test('should render the error fallback', async ({ story }) => {
    await story.navigate('components-customizados-tableboundary--error-state');

    await expect(
      story.canvas.getByText(/ocorreu um erro ao carregar/i),
    ).toBeVisible();
  });
});
