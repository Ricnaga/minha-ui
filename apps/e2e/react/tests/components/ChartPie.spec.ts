import { test, expect } from '../test';

test.describe('ChartPie', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-indicadores-chartpie--default');
  });

  test('should render the chart as an image', async ({ story }) => {
    await expect(
      story.canvas.getByRole('img', { name: 'Navegadores' }),
    ).toBeVisible();
  });

  test('should render one slice and legend entry per data point', async ({
    story,
  }) => {
    await expect(story.page.locator('[data-part="slices"] circle')).toHaveCount(
      5,
    );
    await expect(story.canvas.getByRole('listitem')).toHaveCount(5);
  });
});
