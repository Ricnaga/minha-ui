import { fireEvent, render, screen } from '@testing-library/svelte';
import { describe, expect, it, vi } from 'vitest';

import Button from '../Button.svelte';
import ButtonStory from '../stories/ButtonStory.svelte';

describe('Button', () => {
  describe('Rendering', () => {
    it('should render a native button element', () => {
      render(Button, { props: { children: undefined } });

      const button = screen.getByRole('button');

      expect(button.tagName).toBe('BUTTON');
      expect(button).toHaveAttribute('type', 'button');
    });

    it('should apply the default variants', () => {
      render(Button);

      const button = screen.getByRole('button');

      expect(button).toHaveClass('text-white', 'h-10', 'rounded-lg');
      expect(button).toHaveClass('bg-sky-700');
    });

    it('should apply the variant and color classes', () => {
      render(Button, { props: { variant: 'outline', color: 'error' } });

      const button = screen.getByRole('button');

      expect(button).toHaveClass('border-red-600', 'text-red-600');
    });

    it('should forward native attributes to the button element', () => {
      render(Button, {
        props: { id: 'save', 'aria-label': 'Salvar', 'data-testid': 'primary' },
      });

      const button = screen.getByRole('button', { name: 'Salvar' });

      expect(button).toHaveAttribute('id', 'save');
      expect(button).toHaveAttribute('data-testid', 'primary');
    });

    it('should merge the class prop with the variant classes', () => {
      render(Button, { props: { class: 'h-12 rounded-none' } });

      const button = screen.getByRole('button');

      expect(button).toHaveClass('h-12', 'rounded-none');
      expect(button).not.toHaveClass('h-10');
      expect(button).not.toHaveClass('rounded-lg');
    });
  });

  describe('Interactions', () => {
    it('should call onclick when clicked', async () => {
      const onclick = vi.fn();
      render(ButtonStory, { props: { onclick } });

      await fireEvent.click(screen.getByRole('button'));

      expect(onclick).toHaveBeenCalledTimes(1);
    });

    it('should not call onclick when disabled', async () => {
      const onclick = vi.fn();
      render(ButtonStory, { props: { onclick, disabled: true } });

      await fireEvent.click(screen.getByRole('button'));

      expect(onclick).not.toHaveBeenCalled();
    });
  });

  describe('Loading', () => {
    it('should render the spinner instead of the content', () => {
      render(Button, { props: { isLoading: true } });

      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('should keep the accessible name while loading', () => {
      render(ButtonStory, {
        props: { isLoading: true, children: 'Click me' },
      });

      expect(screen.getByRole('button', { name: 'Click me' })).toBeDisabled();
    });

    it('should be disabled while loading', async () => {
      const onclick = vi.fn();
      render(ButtonStory, { props: { onclick, isLoading: true } });

      const button = screen.getByRole('button');

      expect(button).toBeDisabled();

      await fireEvent.click(button);

      expect(onclick).not.toHaveBeenCalled();
    });
  });
});
