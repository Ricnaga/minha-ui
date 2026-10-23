import { render, screen } from '@testing-library/svelte';
import { createRawSnippet } from 'svelte';
import { describe, expect, it } from 'vitest';

import Card from '../Card.svelte';

const children = createRawSnippet(() => ({
  render: () => '<span>Conteúdo do Card</span>',
}));

describe('Card', () => {
  it('should render card with children', () => {
    render(Card, { props: { children } });
    expect(screen.getByText('Conteúdo do Card')).toBeInTheDocument();
  });

  it('should merge the class with the variant classes', () => {
    render(Card, { props: { class: 'p-4', children } });
    const element = screen.getByText('Conteúdo do Card').parentElement;
    expect(element?.className).toContain('p-4');
  });
});
