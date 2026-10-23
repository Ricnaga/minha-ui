import { render, screen } from '@testing-library/svelte';
import { createRawSnippet } from 'svelte';
import { describe, expect, it } from 'vitest';

import CardTitle from '../CardTitle.svelte';

const children = createRawSnippet(() => ({
  render: () => '<span>Conteúdo do card title</span>',
}));

describe('CardTitle', () => {
  it('should render cardtitle with children', () => {
    render(CardTitle, { props: { children } });
    expect(screen.getByText('Conteúdo do card title')).toBeInTheDocument();
  });

  it('should merge the class with the variant classes', () => {
    render(CardTitle, { props: { class: 'p-4', children } });
    const element = screen.getByText('Conteúdo do card title').parentElement;
    expect(element?.className).toContain('p-4');
  });
});
