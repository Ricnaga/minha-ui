import { test, expect } from '../test';

const MOBILE_VIEWPORT = { width: 390, height: 844 };

test.use({ viewport: MOBILE_VIEWPORT });

test.describe('Responsividade (mobile)', () => {
  test('Table deve oferecer scroll horizontal no container', async ({
    story,
  }) => {
    await story.navigate('components-estruturas-table--responsive');
    const root = story.canvas.getByRole('table').locator('..');

    const overflowX = await root.evaluate(
      (element) => getComputedStyle(element).overflowX,
    );

    await expect(root).toBeVisible();
    expect(overflowX).toBe('auto');
  });

  test('Tabs deve rolar horizontalmente no mobile', async ({ story }) => {
    await story.navigate('components-interação-tabs--responsive');
    const tablist = story.canvas.getByRole('tablist');

    const hasHorizontalScroll = await tablist.evaluate(
      (element) => element.scrollWidth > element.clientWidth,
    );

    await expect(tablist).toBeVisible();
    expect(hasHorizontalScroll).toBe(true);
  });

  test('Stepper horizontal deve rolar e ser focável', async ({ story }) => {
    await story.navigate('components-indicadores-stepper--responsive');
    const stepper = story.canvas.getByRole('group', { name: 'Etapas' });

    await expect(stepper).toBeVisible();
    await expect(stepper).toHaveAttribute('tabindex', '0');

    const hasHorizontalScroll = await stepper.evaluate(
      (element) => element.scrollWidth > element.clientWidth,
    );
    expect(hasHorizontalScroll).toBe(true);
  });

  test('Accordion deve ocupar a largura total no mobile', async ({ story }) => {
    await story.navigate('components-interação-accordion--responsive');
    const item = story.canvas
      .locator('[role="presentation"]')
      .filter({ hasText: 'Item 1' })
      .first();

    const widths = await Promise.all([
      item.evaluate((element) => element.getBoundingClientRect().width),
      story.canvas.evaluate((element) => element.getBoundingClientRect().width),
    ]);
    const [itemWidth, canvasWidth] = widths;

    await expect(item).toBeVisible();
    expect(itemWidth).toBeGreaterThan(canvasWidth * 0.9);
  });
});
