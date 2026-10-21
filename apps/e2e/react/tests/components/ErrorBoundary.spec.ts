import { test, expect } from '../test';

test.describe('ErrorBoundary', () => {
  test('should render content without error', async ({ story }) => {
    await story.navigate('components-interação-errorboundary--default');

    const canvas = story.canvas;
    const content = canvas.getByTestId('success-content');

    await expect(content).toBeVisible();
  });

  test('should show fallback on error', async ({ story }) => {
    await story.navigate('components-interação-errorboundary--with-fallback');

    const canvas = story.canvas;
    const fallback = canvas.getByTestId('error-fallback');

    await expect(fallback).toBeVisible();
  });
});
