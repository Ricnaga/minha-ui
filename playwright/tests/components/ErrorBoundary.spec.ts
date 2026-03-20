import { test, expect } from '../test';

test.describe('ErrorBoundary', () => {
  const STORYBOOK_URL = 'http://localhost:6006';

  test('should render content without error', async ({ story }) => {
    await story.page.goto(
      `${STORYBOOK_URL}/iframe.html?id=components-intera%C3%A7%C3%A3o-errorboundary--default&viewMode=story`,
    );
    await story.page.waitForLoadState('networkidle');

    const canvas = story.page.locator('#storybook-root');
    const content = canvas.getByTestId('success-content');

    await expect(content).toBeVisible();
  });

  test('should show fallback on error', async ({ story }) => {
    await story.page.goto(
      `${STORYBOOK_URL}/iframe.html?id=components-intera%C3%A7%C3%A3o-errorboundary--with-fallback&viewMode=story`,
    );
    await story.page.waitForLoadState('networkidle');

    const canvas = story.page.locator('#storybook-root');
    const fallback = canvas.getByTestId('error-fallback');

    await expect(fallback).toBeVisible();
  });
});
