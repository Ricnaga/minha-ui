import { test, expect } from '../test';

test.describe('TablePagination', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate(
      'components-estruturas-table-tablepagination--default',
    );
  });

  test('should render the pagination controls', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
    await expect(
      canvas.getByRole('button', { name: /próxima página/i }),
    ).toBeVisible();
  });
});
