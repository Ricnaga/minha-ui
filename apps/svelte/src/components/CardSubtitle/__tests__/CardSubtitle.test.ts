import { render, screen } from '@testing-library/svelte';
import { createRawSnippet } from 'svelte';
import { describe, expect, it } from 'vitest';

import CardSubtitle from '../CardSubtitle.svelte';

const children = createRawSnippet(() => ({
  render: () => '<span>Conteúdo do card sub title</span>',
}));

describe('CardSubtitle', () => {
  it('should render cardsubtitle with children', () => {
    render(CardSubtitle, { props: { children } });
    expect(screen.getByText('Conteúdo do card sub title')).toBeInTheDocument();
  });

  it('should merge the class with the variant classes', () => {
    render(CardSubtitle, { props: { class: 'p-4', children } });
    const element = screen.getByText(
      'Conteúdo do card sub title',
    ).parentElement;
    expect(element?.className).toContain('p-4');
  });
});
