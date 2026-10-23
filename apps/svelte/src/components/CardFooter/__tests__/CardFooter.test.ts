import { render, screen } from '@testing-library/svelte';
import { createRawSnippet } from 'svelte';
import { describe, expect, it } from 'vitest';

import CardFooter from '../CardFooter.svelte';

const children = createRawSnippet(() => ({
  render: () => '<span>Conteúdo do Card Footer</span>',
}));

describe('CardFooter', () => {
  it('should render cardfooter with children', () => {
    render(CardFooter, { props: { children } });
    expect(screen.getByText('Conteúdo do Card Footer')).toBeInTheDocument();
  });

  it('should merge the class with the variant classes', () => {
    render(CardFooter, { props: { class: 'p-4', children } });
    const element = screen.getByText('Conteúdo do Card Footer').parentElement;
    expect(element?.className).toContain('p-4');
  });
});
