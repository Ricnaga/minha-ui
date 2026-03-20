import { test, expect } from '../test';

test.describe('useFetch', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('hooks-usefetch--default');
  });

  test('should render useFetch demo', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
