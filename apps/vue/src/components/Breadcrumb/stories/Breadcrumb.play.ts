import type { PlayFunction } from 'storybook/internal/csf';
import { expect, within } from 'storybook/test';

export const testDefaultBreadcrumb: PlayFunction = async ({
  canvasElement,
}) => {
  const canvas = within(canvasElement);

  const nav = canvas.getByRole('navigation', { name: 'Breadcrumb' });
  await expect(nav).toBeInTheDocument();

  const link = canvas.getByRole('link', { name: 'Produtos' });
  await expect(link).toHaveAttribute('href', '/produtos');

  const currentPage = canvas.getByText('Detalhes');
  await expect(currentPage).toHaveAttribute('aria-current', 'page');
};
