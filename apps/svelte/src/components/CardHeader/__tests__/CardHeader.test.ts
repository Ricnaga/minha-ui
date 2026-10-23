import { render, screen } from '@testing-library/svelte';
import { createRawSnippet } from 'svelte';
import { describe, expect, it } from 'vitest';

import CardHeader from '../CardHeader.svelte';

const children = createRawSnippet(() => ({
  render: () => '<span>Conteúdo do Card Header</span>',
}));

describe('CardHeader', () => {
  it('should render cardheader with children', () => {
    render(CardHeader, { props: { children } });
    expect(screen.getByText('Conteúdo do Card Header')).toBeInTheDocument();
  });

  it('should merge the class with the variant classes', () => {
    render(CardHeader, { props: { class: 'p-4', children } });
    const element = screen.getByText('Conteúdo do Card Header').parentElement;
    expect(element?.className).toContain('p-4');
  });
});
