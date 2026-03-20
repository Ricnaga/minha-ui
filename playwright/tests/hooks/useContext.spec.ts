import { test, expect } from '../test';

test.describe('useContext', () => {
  const STORYBOOK_URL = 'http://localhost:6006';

  test.beforeEach(async ({ story }) => {
    await story.page.goto(
      `${STORYBOOK_URL}/iframe.html?id=hooks-usecontext--default&viewMode=story`,
    );
    await story.page.waitForLoadState('networkidle');
  });

  test('should render context value', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');
    const valueText = canvas.getByText(/value from context/i);

    await expect(valueText).toBeVisible();
  });

  test('should update context value on button click', async ({ story }) => {
    const canvas = story.page.locator('#storybook-root');
    const updateButton = canvas.getByRole('button', { name: /update/i });

    await expect(updateButton).toBeVisible();
    await updateButton.click();

    const newValue = canvas.getByText(/Updated value/i);
    await expect(newValue).toBeVisible();
  });
});
