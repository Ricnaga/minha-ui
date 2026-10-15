import { test, expect } from '../test';

test.describe('ScrollArea', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-estruturas-scrollarea--default');
  });

  test('should render a focusable region', async ({ story }) => {
    const region = story.canvas.getByRole('region', {
      name: 'Lista de itens',
    });

    await expect(region).toBeVisible();
    await expect(region).toHaveAttribute('tabindex', '0');
  });

  test('should scroll its content', async ({ story }) => {
    const region = story.canvas.getByRole('region', {
      name: 'Lista de itens',
    });

    const scrollTop = await region.evaluate((element) => {
      element.scrollTop = 40;
      return element.scrollTop;
    });

    expect(scrollTop).toBeGreaterThan(0);
  });
});
