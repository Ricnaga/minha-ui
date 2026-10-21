import { test, expect } from '../test';

test.describe('useDebounce', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('hooks-usedebounce--default');
  });

  test('should render debounce demo', async ({ story }) => {
    const canvas = story.canvas;
    const input = canvas.getByRole('textbox');

    await expect(input).toBeVisible();
  });

  test('should debounce input value', async ({ story }) => {
    const canvas = story.canvas;
    const input = canvas.getByRole('textbox');

    await input.fill('test');
    await input.blur();

    await story.page.waitForTimeout(500);
  });
});
