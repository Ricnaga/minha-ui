import { fireEvent, render, screen } from '@testing-library/svelte';
import { describe, expect, it, vi } from 'vitest';

import Input from '../Input.svelte';

describe('Input', () => {
  describe('Rendering', () => {
    it('should render input correctly', () => {
      const { container } = render(Input, {
        props: { placeholder: 'Enter text' } as Record<string, unknown>,
      });
      expect(container).toMatchSnapshot();
    });
  });

  describe('Interactions', () => {
    it('should call onChange when typing', async () => {
      const handleChange = vi.fn();
      render(Input, {
        props: { placeholder: 'Type here', oninput: handleChange } as Record<
          string,
          unknown
        >,
      });

      await fireEvent.input(screen.getByRole('textbox'), {
        target: { value: 'hello' },
      });
      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe('Responsividade', () => {
    it('should apply responsive min-width classes on the container', () => {
      const { container } = render(Input, {
        props: { placeholder: 'Enter text' } as Record<string, unknown>,
      });
      const inputContainer = container.firstElementChild as HTMLElement;
      expect(inputContainer?.className).toContain('min-w-0');
      expect(inputContainer?.className).toContain('sm:min-w-50');
    });
  });
});
