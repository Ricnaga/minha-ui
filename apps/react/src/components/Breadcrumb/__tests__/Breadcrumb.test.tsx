import { render, screen } from '@testing-library/react';
import type { ComponentProps } from 'react';
import { Breadcrumb } from '..';
import { BreadcrumbItem } from '../../BreadcrumbItem/BreadcrumbItem';
import { BreadcrumbLink } from '../../BreadcrumbLink/BreadcrumbLink';
import { BreadcrumbList } from '../../BreadcrumbList/BreadcrumbList';
import { BreadcrumbPage } from '../../BreadcrumbPage/BreadcrumbPage';
import { BreadcrumbSeparator } from '../../BreadcrumbSeparator/BreadcrumbSeparator';

function renderBreadcrumb(
  props: Partial<ComponentProps<typeof Breadcrumb>> = {},
) {
  return render(
    <Breadcrumb {...props}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/produtos">Produtos</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Detalhes</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>,
  );
}

describe('Breadcrumb', () => {
  describe('Rendering', () => {
    it('should render correctly', () => {
      const { container } = renderBreadcrumb();
      expect(container).toMatchSnapshot();
    });

    it('should render a navigation landmark with an accessible name', () => {
      renderBreadcrumb();
      expect(
        screen.getByRole('navigation', { name: 'Breadcrumb' }),
      ).toBeInTheDocument();
    });

    it('should allow overriding the navigation label', () => {
      renderBreadcrumb({ 'aria-label': 'Trilha de navegação' });
      expect(
        screen.getByRole('navigation', { name: 'Trilha de navegação' }),
      ).toBeInTheDocument();
    });

    it('should render links with their href', () => {
      renderBreadcrumb();
      expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute(
        'href',
        '/',
      );
      expect(screen.getByRole('link', { name: 'Produtos' })).toHaveAttribute(
        'href',
        '/produtos',
      );
    });

    it('should mark the current page with aria-current', () => {
      renderBreadcrumb();
      expect(screen.getByText('Detalhes')).toHaveAttribute(
        'aria-current',
        'page',
      );
    });

    it('should hide separators from assistive technology', () => {
      const { container } = renderBreadcrumb();
      const separators = container.querySelectorAll('li[aria-hidden="true"]');
      expect(separators).toHaveLength(2);
    });

    it('should apply size classes to the list', () => {
      const { container } = renderBreadcrumb({ size: 'sm' });
      expect(container.querySelector('ol')?.className).toContain('text-xs');
    });

    it('should apply responsive gap classes to the list', () => {
      const { container } = renderBreadcrumb({ size: 'md' });
      const list = container.querySelector('ol');

      expect(list).toHaveClass('gap-1', 'sm:gap-1.5');
    });

    it('should render a custom separator', () => {
      renderBreadcrumb({ separator: '/' });
      expect(screen.getAllByText('/')).toHaveLength(2);
    });
  });
});
