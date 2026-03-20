import { test, expect } from '../test';

test.describe('VideoPlayer', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-multimídia-videoplayer--default');
  });

  test('should render video player', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
