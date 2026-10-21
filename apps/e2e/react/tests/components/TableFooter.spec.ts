import { test, expect } from '../test';

test.describe('TableFooter', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-estruturas-table-tablefooter--default');
  });

  test('should render the footer content', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
    await expect(canvas.getByText('Total')).toBeVisible();
    await expect(canvas.getByText('3 usuários')).toBeVisible();
  });
});
