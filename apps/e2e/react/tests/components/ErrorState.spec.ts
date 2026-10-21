import { test, expect } from '../test';

test.describe('ErrorState', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-feedback-errorstate--default');
  });

  test('should render the default message', async ({ story }) => {
    await expect(story.canvas.getByText('Algo deu errado')).toBeVisible();
  });

  test('should render the default image', async ({ story }) => {
    await expect(story.canvas.locator('svg').first()).toBeVisible();
  });
});
