import { render, screen } from '@testing-library/svelte';
import { createRawSnippet } from 'svelte';
import { describe, expect, it } from 'vitest';

import CardActions from '../CardActions.svelte';

const children = createRawSnippet(() => ({
  render: () => '<span>Conteúdo do Card Actions</span>',
}));

describe('CardActions', () => {
  it('should render cardactions with children', () => {
    render(CardActions, { props: { children } });
    expect(screen.getByText('Conteúdo do Card Actions')).toBeInTheDocument();
  });

  it('should merge the class with the variant classes', () => {
    render(CardActions, { props: { class: 'p-4', children } });
    const element = screen.getByText('Conteúdo do Card Actions').parentElement;
    expect(element?.className).toContain('p-4');
  });
});
