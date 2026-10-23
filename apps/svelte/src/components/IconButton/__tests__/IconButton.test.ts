import { fireEvent, render, screen } from '@testing-library/svelte';
import { createRawSnippet } from 'svelte';
import { describe, expect, it, vi } from 'vitest';

import { IconButton } from '../';

const iconSnippet = createRawSnippet(() => ({
  render: () => '<svg></svg>',
}));

describe('IconButton', () => {
  it('should render icon button correctly', () => {
    render(IconButton, {
      props: { 'aria-label': 'Home', children: iconSnippet },
    });

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Home');
  });

  it('should call onclick when clicked', async () => {
    const handleClick = vi.fn();
    render(IconButton, {
      props: {
        'aria-label': 'Click',
        children: iconSnippet,
        onclick: handleClick,
      },
    });

    await fireEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
