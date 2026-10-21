import { test, expect } from '../test';

test.describe('Breadcrumb', () => {
  test.beforeEach(async ({ story }) => {
    await story.navigate('components-estruturas-breadcrumb--default');
  });

  test('should render the navigation with its links', async ({ story }) => {
    const nav = story.canvas.getByRole('navigation', { name: 'Breadcrumb' });

    await expect(nav).toBeVisible();
    await expect(
      story.canvas.getByRole('link', { name: 'Home' }),
    ).toHaveAttribute('href', '/');
    await expect(
      story.canvas.getByRole('link', { name: 'Produtos' }),
    ).toHaveAttribute('href', '/produtos');
  });

  test('should mark the current page', async ({ story }) => {
    await expect(story.canvas.getByText('Detalhes')).toHaveAttribute(
      'aria-current',
      'page',
    );
  });
});
