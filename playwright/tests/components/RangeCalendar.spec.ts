import { test, expect } from '../test';

test.describe('RangeCalendar', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-rangecalendar--default');
  });

  test('should render range calendar', async ({ story }) => {
    const canvas = story.canvas;

    await expect(canvas).toBeVisible();
  });
});
