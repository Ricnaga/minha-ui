import { render, screen } from '@testing-library/svelte';
import { createRawSnippet } from 'svelte';
import { describe, expect, it } from 'vitest';

import CardBody from '../CardBody.svelte';

const children = createRawSnippet(() => ({
  render: () => '<span>Conteúdo do Card Body</span>',
}));

describe('CardBody', () => {
  it('should render cardbody with children', () => {
    render(CardBody, { props: { children } });
    expect(screen.getByText('Conteúdo do Card Body')).toBeInTheDocument();
  });

  it('should merge the class with the variant classes', () => {
    render(CardBody, { props: { class: 'p-4', children } });
    const element = screen.getByText('Conteúdo do Card Body').parentElement;
    expect(element?.className).toContain('p-4');
  });
});
