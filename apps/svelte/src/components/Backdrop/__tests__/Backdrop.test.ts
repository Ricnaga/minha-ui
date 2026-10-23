import { render, screen } from '@testing-library/svelte';
import { createRawSnippet } from 'svelte';
import { describe, expect, it } from 'vitest';

import Backdrop from '../Backdrop.svelte';

const children = createRawSnippet(() => ({
  render: () => '<div>Modal Content</div>',
}));

describe('Backdrop', () => {
  it('should render children', () => {
    render(Backdrop, { props: { isOpen: true, children } });

    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });
});
