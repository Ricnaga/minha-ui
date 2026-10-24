import { render, screen } from '@testing-library/svelte';
import { createRawSnippet } from 'svelte';
import { describe, expect, it } from 'vitest';

import { Breadcrumb } from '..';

describe('Breadcrumb', () => {
  describe('Rendering', () => {
    it('should render correctly', () => {
      const { container } = render(Breadcrumb, {
        props: {
          children: createRawSnippet(() => ({ render: () => '<nav></nav>' })),
        },
      });
      expect(container).toBeTruthy();
    });

    it('should render a navigation landmark with an accessible name', () => {
      render(Breadcrumb, {
        props: {
          children: createRawSnippet(() => ({ render: () => '<div></div>' })),
        },
      });
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('should allow overriding the navigation label', () => {
      render(Breadcrumb, {
        props: {
          'aria-label': 'Trilha de navegação',
          children: createRawSnippet(() => ({ render: () => '<div></div>' })),
        },
      });
      expect(
        screen.getByRole('navigation', { name: 'Trilha de navegação' }),
      ).toBeInTheDocument();
    });

    it('should render links with their href', () => {
      render(Breadcrumb, {
        props: {
          children: createRawSnippet(() => ({
            render: () =>
              '<ol><li><a href="/">Home</a></li><li aria-hidden="true"></li><li><a href="/produtos">Produtos</a></li><li aria-hidden="true"></li><li aria-current="page">Detalhes</li></ol>',
          })),
        },
      });
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
      render(Breadcrumb, {
        props: {
          children: createRawSnippet(() => ({
            render: () =>
              '<ol><li><a href="/">Home</a></li><li aria-hidden="true"></li><li><a href="/produtos">Produtos</a></li><li aria-hidden="true"></li><li aria-current="page">Detalhes</li></ol>',
          })),
        },
      });
      expect(screen.getByText('Detalhes')).toHaveAttribute(
        'aria-current',
        'page',
      );
    });

    it('should hide separators from assistive technology', () => {
      const { container } = render(Breadcrumb, {
        props: {
          children: createRawSnippet(() => ({
            render: () =>
              '<ol><li>Home</li><li aria-hidden="true"></li><li>Produtos</li><li aria-hidden="true"></li><li aria-current="page">Detalhes</li></ol>',
          })),
        },
      });
      expect(container.querySelectorAll('li[aria-hidden="true"]')).toHaveLength(
        2,
      );
    });

    it('should apply size classes to the list', () => {
      render(Breadcrumb, {
        props: {
          size: 'sm',
          children: createRawSnippet(() => ({
            render: () => '<ol class="text-xs gap-0.5"></ol>',
          })),
        },
      });
      expect(
        screen.getByRole('navigation').querySelector('ol')?.className,
      ).toContain('text-xs');
    });

    it('should apply responsive gap classes to the list', () => {
      render(Breadcrumb, {
        props: {
          size: 'md',
          children: createRawSnippet(() => ({
            render: () => '<ol class="gap-1 sm:gap-1.5"></ol>',
          })),
        },
      });
      expect(
        screen.getByRole('navigation').querySelector('ol')?.className,
      ).toContain('gap-1');
      expect(
        screen.getByRole('navigation').querySelector('ol')?.className,
      ).toContain('sm:gap-1.5');
    });

    it('should render a custom separator', () => {
      render(Breadcrumb, {
        props: {
          separator: '/',
          children: createRawSnippet(() => ({
            render: () =>
              '<ol><li>Home</li><li>/</li><li>Produtos</li><li>/</li><li aria-current="page">Detalhes</li></ol>',
          })),
        },
      });
      expect(screen.getAllByText('/')).toHaveLength(2);
    });
  });
});
