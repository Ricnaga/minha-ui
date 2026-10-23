import { render, screen } from '@testing-library/svelte';
import { createRawSnippet } from 'svelte';
import { describe, expect, it } from 'vitest';

import CardDescription from '../CardDescription.svelte';

const children = createRawSnippet(() => ({
  render: () => '<span>Conteúdo do card description</span>',
}));

describe('CardDescription', () => {
  it('should render carddescription with children', () => {
    render(CardDescription, { props: { children } });
    expect(
      screen.getByText('Conteúdo do card description'),
    ).toBeInTheDocument();
  });

  it('should merge the class with the variant classes', () => {
    render(CardDescription, { props: { class: 'p-4', children } });
    const element = screen.getByText(
      'Conteúdo do card description',
    ).parentElement;
    expect(element?.className).toContain('p-4');
  });
});
