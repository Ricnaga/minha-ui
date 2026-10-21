import { test, expect } from '../test';

test.describe('TableRow', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-estruturas-table-tablerow--default');
  });

  test('should render the row with its cells', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
    await expect(canvas.getByRole('row', { name: /John Doe/ })).toBeVisible();
    await expect(
      canvas.getByRole('row', { name: /john.doe@example.com/ }),
    ).toBeVisible();
  });
});
