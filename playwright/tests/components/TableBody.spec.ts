import { test, expect } from '../test';

test.describe('TableBody', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-estruturas-table-tablebody--default');
  });

  test('should render rows from the table data', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
    await expect(canvas.getByRole('cell', { name: 'John Doe' })).toBeVisible();
    await expect(
      canvas.getByRole('cell', { name: 'john.doe@example.com' }),
    ).toBeVisible();
  });
});
