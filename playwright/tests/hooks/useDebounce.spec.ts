import { test, expect } from '../test';

test.describe('useDebounce', () => {
  const STORYBOOK_URL = 'http://localhost:6006';

  test.beforeEach(async ({ story }) => {
    await story.page.goto(
      `${STORYBOOK_URL}/iframe.html?id=hooks-usedebounce--default&viewMode=story`,
    );
    await story.page.waitForLoadState('networkidle');
  });

  test('should render debounce demo', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');
    const input = canvas.getByRole('textbox');

    await expect(input).toBeVisible();
  });

  test('should debounce input value', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');
    const input = canvas.getByRole('textbox');

    await input.fill('test');
    await input.blur();

    await story.page.waitForTimeout(500);
  });
});
