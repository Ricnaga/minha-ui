import { test, expect } from '../test';

test.describe('EmptyState', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-feedback-emptystate--default');
  });

  test('should render the default message', async ({ story }) => {
    await expect(
      story.canvas.getByText('Nenhum resultado encontrado'),
    ).toBeVisible();
  });

  test('should render the default image', async ({ story }) => {
    await expect(story.canvas.locator('svg').first()).toBeVisible();
  });
});
