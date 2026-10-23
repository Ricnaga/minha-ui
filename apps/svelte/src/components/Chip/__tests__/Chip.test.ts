import { fireEvent, render, screen } from '@testing-library/svelte';
import { createRawSnippet } from 'svelte';
import { describe, expect, it, vi } from 'vitest';

import { Chip } from '../';

const tagSnippet = createRawSnippet(() => ({
  render: () => '<span>Tag</span>',
}));

describe('Chip', () => {
  it('should render chip with text', () => {
    render(Chip, { props: { children: tagSnippet } });

    expect(screen.getByText('Tag')).toBeInTheDocument();
  });

  it('should call onclick when clicked', async () => {
    const handleClick = vi.fn();
    render(Chip, { props: { children: tagSnippet, onclick: handleClick } });

    await fireEvent.click(screen.getByText('Tag'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  describe('Removable', () => {
    it('should not render a remove button without onRemove', () => {
      render(Chip, { props: { children: tagSnippet } });

      expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });

    it('should render an accessible remove button with onRemove', () => {
      render(Chip, { props: { children: tagSnippet, onRemove: vi.fn() } });

      expect(
        screen.getByRole('button', { name: 'Remover' }),
      ).toBeInTheDocument();
    });

    it('should call onRemove when the button is clicked', async () => {
      const handleRemove = vi.fn();
      render(Chip, {
        props: { children: tagSnippet, onRemove: handleRemove },
      });

      await fireEvent.click(screen.getByRole('button', { name: 'Remover' }));

      expect(handleRemove).toHaveBeenCalledTimes(1);
    });

    it('should not trigger the chip onclick when removing', async () => {
      const handleClick = vi.fn();
      const handleRemove = vi.fn();
      render(Chip, {
        props: {
          children: tagSnippet,
          onclick: handleClick,
          onRemove: handleRemove,
        },
      });

      await fireEvent.click(screen.getByRole('button', { name: 'Remover' }));

      expect(handleRemove).toHaveBeenCalledTimes(1);
      expect(handleClick).not.toHaveBeenCalled();
    });
  });
});
