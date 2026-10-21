import { test, expect } from '../test';

test.describe('TableCell', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-estruturas-table-tablecell--default');
  });

  test('should render the cell content', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
    await expect(canvas.getByRole('cell', { name: 'John Doe' })).toBeVisible();
  });
});
