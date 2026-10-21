import { test, expect } from '../test';

test.describe('Chart', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-indicadores-chart--default');
  });

  test('should render the chart as an image', async ({ story }) => {
    await expect(
      story.canvas.getByRole('img', { name: 'Vendas por mês' }),
    ).toBeVisible();
  });

  test('should render one bar per data point', async ({ story }) => {
    await expect(story.page.locator('[data-part="bars"] rect')).toHaveCount(5);
  });
});
