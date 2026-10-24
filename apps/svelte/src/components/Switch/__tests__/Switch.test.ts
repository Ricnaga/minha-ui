import { render, screen, fireEvent } from '@testing-library/svelte';
import { describe, expect, it, vi } from 'vitest';

import Switch from '../Switch.svelte';

describe('Switch', () => {
  describe('Rendering', () => {
    it('should render correctly', () => {
      const { container } = render(Switch);
      expect(container).toMatchSnapshot();
    });

    it('should render with an accessible switch role', () => {
      render(Switch, { props: { label: 'Ativo' } as Record<string, unknown> });
      expect(screen.getByRole('switch')).toBeInTheDocument();
    });

    it('should associate the label with the switch', () => {
      render(Switch, { props: { label: 'Ativo' } as Record<string, unknown> });
      expect(screen.getByLabelText('Ativo')).toBe(screen.getByRole('switch'));
    });

    it('should apply size classes', () => {
      render(Switch, { props: { size: 'small', label: 'Ativo' } as Record<string, unknown> });
      expect((screen.getByRole('switch') as HTMLElement).className).toContain('w-9');
    });

    it('should apply color classes', () => {
      render(Switch, { props: { color: 'error', label: 'Ativo' } as Record<string, unknown> });
      expect((screen.getByRole('switch') as HTMLElement).className).toContain('checked:bg-red-500');
    });
  });

  describe('Interactions', () => {
    it('should toggle when clicked', async () => {
      render(Switch, { props: { label: 'Ativo' } as Record<string, unknown> });

      const control = screen.getByRole('switch') as HTMLInputElement;
      expect(control).not.toBeChecked();

      await fireEvent.click(control);
      expect(control).toBeChecked();

      await fireEvent.click(control);
      expect(control).not.toBeChecked();
    });

    it('should emit a boolean through onCheckedChange', async () => {
      const handleCheckedChange = vi.fn();
      render(Switch, { props: { onCheckedChange: handleCheckedChange } as Record<string, unknown> });

      await fireEvent.click(screen.getByRole('switch'));

      expect(handleCheckedChange).toHaveBeenCalledWith(true);
    });

    it('should toggle when the label is clicked', async () => {
      render(Switch, { props: { label: 'Ativo' } as Record<string, unknown> });

      await fireEvent.click(screen.getByText('Ativo'));

      expect(screen.getByRole('switch')).toBeChecked();
    });

    it('should start checked with defaultChecked', () => {
      render(Switch, { props: { defaultChecked: true, label: 'Ativo' } as Record<string, unknown> });
      expect(screen.getByRole('switch')).toBeChecked();
    });
  });
});
